const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const commentCtrl = require('../controllers/comment.controller');

const router = express.Router();
module.exports = router;

router.get('/', index);
router.get('/:id', passport.authenticate('jwt', { session: false }), detail);
router.post('/', insert);
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy);

async function insert (req, res) {
  let comment = await commentCtrl.insert(req.body);
  res.json(comment);
}

async function destroy (req, res) {
  let comment = await commentCtrl.destroy(req.params.id)
  res.json(comment)
}

async function detail (req, res) {
  let comment = await commentCtrl.detail(req.params.id);
  res.json(comment)
}

async function index (req, res) {
  let comment = await commentCtrl.index(req.query);
  res.json(comment);
}