const Joi = require('joi');
const Comment = require('../models/comment.model');
const config = require('../config/config')

const commentSchema = Joi.object({
  body: Joi.string().required(),
  email: Joi.string().email(),
  name: Joi.string().required(),
  parent_id: Joi.string().required(),
  parent_type: Joi.string().required()
})


module.exports = {
  insert, destroy, index, detail
}

async function insert (comment) {
  comment = await Joi.validate(comment, commentSchema, { abortEarly: false });
  return await new Comment(comment).save();
}

async function index (obj) {
  let page = 1;
  if (obj.page) {
    page = obj.page;
    delete obj.page
  }
  let pageNum = config.paginationNum;
  return await Comment.find(obj).sort({ '_id': -1 }).skip((page - 1) * pageNum).limit(pageNum);
}

async function detail (id) {
  return await Comment.findById(id)
}

async function destroy (id) {
  return await Comment.findByIdAndRemove(id)
}
