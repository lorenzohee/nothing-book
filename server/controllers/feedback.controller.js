const Joi = require('joi');
const FeedBack = require('../models/feedback.model');
const config = require('../config/config')

const feedBackSchema = Joi.object({
  body: Joi.string().required(),
  email: Joi.string().email(),
  name: Joi.string().required(),
  phone: Joi.any(),
  company: Joi.any()
})


module.exports = {
  insert, destroy, index
}

async function insert (feedBack) {
  feedBack = await Joi.validate(feedBack, feedBackSchema, { abortEarly: false });
  return await new FeedBack(feedBack).save();
}

async function index (obj) {
  let page = 1;
  if (obj.page) {
    page = obj.page;
    delete obj.page
  }
  let pageNum = config.paginationNum;
  return await FeedBack.find(obj).sort({ '_id': -1 }).skip((page - 1) * pageNum).limit(pageNum);
}

async function destroy (id) {
  return await FeedBack.findByIdAndRemove(id)
}
