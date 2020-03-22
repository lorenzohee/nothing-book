const path = require('path');
const express = require('express');
const httpError = require('http-errors');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const routes = require('../routes/index.route');
const config = require('./config');
const passport = require('./passport')
var fs = require('fs');//文件模块
var FileStreamRotator = require('file-stream-rotator');

// if (config.env !== 'development') {
//   const { enableProdMode } = require('@angular/core');

//   // Faster server renders w/ Prod mode (dev mode never needed)
//   enableProdMode();

//   const domino = require('domino');
//   const templateA = fs.readFileSync(path.join('dist', 'index.html')).toString();
//   const win = domino.createWindow(templateA);
//   win.Object = Object;
//   win.Math = Math;
//   win.scrollTo = function (w, h) { }
//   win.localStorage = {
//     //mock browser localstorage
//     getItem (key) { return null }, removeItem (str) { }, clear () { }, setItem (key, val) { }
//   }
//   global['window'] = win;
//   global['document'] = win.document;
//   global['branch'] = null;
//   global['object'] = win.object;
// }

const app = express();

//设置日志文件目录
var logDirectory = path.join(__dirname, '../logs');
//确保日志文件目录存在 没有则创建
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
//创建一个写路由
var accessLogStream = FileStreamRotator.getStream({
  filename: logDirectory + '/nothingbook-%DATE%.log',
  frequency: 'daily',
  verbose: false
})

// 自定义token
logger.token('from', function (req, res) {
  return req.query.from || '-';
});
// 自定义format，其中包含自定义的token
logger.format('joke', '[joke] :method :url :status :from');

if (config.env === 'development') {
  // 使用自定义的format
  app.use(logger('joke'));
}

app.use(logger('combined', { stream: accessLogStream }));//写入日志文件

var distDir = '../../dist/';

// if (config.env !== 'development') {
//   //SSR 服务端渲染
//   // * NOTE :: leave this as require() since this file is built Dynamically from webpack
//   const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../dist/server/main');

//   // Express Engine
//   const { ngExpressEngine } = require('@nguniversal/express-engine');
//   // Import module map for lazy loading
//   const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

//   app.engine('html', ngExpressEngine({
//     bootstrap: AppServerModuleNgFactory,
//     providers: [
//       provideModuleMap(LAZY_MODULE_MAP)
//     ]
//   }));
//   app.set('view engine', 'html');
//   app.set('views', path.join(process.cwd(), 'dist'));
// }
// 
app.use(express.static(path.join(__dirname, distDir)))
app.use(express.static(path.join(__dirname, '../../uploads')))
app.use(express.static(path.join(__dirname, '../../audio')))
app.use(express.static(path.join(__dirname, '../../vendor')))
app.use(/^((?!(api)).)*/, (req, res) => {
  if (config.env !== 'development') {
    res.render('index', { req });
  } else {
    res.sendFile(path.join(__dirname, distDir + '/index.html'));
  }
  // res.sendFile(path.join(__dirname, distDir + '/index.html'));
});
// app.get('*', (req, res) => {
//   res.render('index', { req });
// });
//React server
// app.use(express.static(path.join(__dirname, '../../node_modules/material-dashboard-react/dist')))
// app.use(/^((?!(api)).)*/, (req, res) => {
//   res.sendFile(path.join(__dirname, '../../dist/index.html'));
// });


app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use(passport.initialize());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// API router
app.use('/api/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new httpError(404)
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {

  // customize Joi validation errors
  if (err.isJoi) {
    err.message = err.details.map(e => e.message).join("; ");
    err.status = 400;
  }

  res.status(err.status || 500).json({
    message: err.message
  });
  next(err);
});

module.exports = app;
