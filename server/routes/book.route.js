const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const bookCtrl = require('../controllers/book.controller');
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, '' + Date.now() + '-' + file.originalname)
  }
})

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // 限制文件上传类型，仅可上传png格式图片
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/gif') {
      cb(null, true)
    } else {
      cb(null, false)
    }
  }
})

const router = express.Router();
module.exports = router;

router.post('/upload', passport.authenticate('jwt', { session: false }), upload.single('bookBanner'), postBanner);
// router.post('/', passport.authenticate('jwt', { session: false }), insert);
router.post('/', insert);
router.get('/', index);
router.put('/:id', update);
router.get('/:id/content', getBookContent)
router.get('/:id', detail);
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy);

async function insert (req, res) {
  let book = await bookCtrl.insert(req.body);
  res.json(book);
}

async function detail (req, res) {
  let book = await bookCtrl.detail(req.params.id);
  res.json(book)
}

async function getBookContent(req, res){
  let obj = req.query;
  obj.id = req.params.id;
  let book = await bookCtrl.getBookContent(obj)
  return res.json(book);
}

async function index (req, res) {
  let books = await bookCtrl.index(req.query);
  res.json(books);
}

async function update (req, res) {
  let book = await bookCtrl.update(req.body, req.params.id);
  res.json(book)
}

async function destroy (req, res) {
  let book = await bookCtrl.destroy(req.params.id)
  res.json(book)
}

async function postBanner (req, res) {
  var file = req.file;
  res.json(file)
}