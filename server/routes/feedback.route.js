const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const feedBackCtrl = require('../controllers/feedback.controller');

const router = express.Router();
module.exports = router;

router.get('/', passport.authenticate('jwt', { session: false }), index);
router.post('/', insert);
router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy);

async function insert (req, res) {
  let feedBack = await feedBackCtrl.insert(req.body);
  res.json(feedBack);
}

async function destroy (req, res) {
  let feedBack = await feedBackCtrl.destroy(req.params.id)
  res.json(feedBack)
}

async function index (req, res) {
  let feedBack = await feedBackCtrl.index(req.query);
  res.json(feedBack);
}