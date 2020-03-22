const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const cfgCtrl = require('../controllers/cfg.controller');

const router = express.Router();
module.exports = router;

router.post('/', passport.authenticate('jwt', { session: false }), insert);
router.get('/', index);
router.put('/:id', passport.authenticate('jwt', { session: false }), update);
router.get('/:id', passport.authenticate('jwt', { session: false }), detail);
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy);

async function insert (req, res) {
  let cfg = await cfgCtrl.insert(req.body);
  res.json(cfg);
}

async function detail (req, res) {
  let cfg = await cfgCtrl.detail(req.params.id);
  res.json(cfg)
}

async function index (req, res) {
  let cfgs = await cfgCtrl.index(req.query);
  res.json(cfgs);
}

async function update (req, res) {
  let cfg = await cfgCtrl.update(req.body, req.params.id);
  res.json(cfg)
}

async function destroy (req, res) {
  let cfg = await cfgCtrl.destroy(req.params.id)
  res.json(cfg)
}