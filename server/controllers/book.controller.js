const Joi = require('joi');
const Book = require('../models/book.model');
const config = require('../config/config')

const bookSchema = Joi.object({
  name: Joi.string().required(),
  content: Joi.string().required(),
  bookType: Joi.string().required(),
  cover: Joi.any(),
  abstract: Joi.string().required(),
  tags: Joi.array(),
  showTime: Joi.any(),
  author: Joi.string()
})


module.exports = {
  insert, index, update, destroy, detail, count, getBookContent
}

async function insert (book) {
  book = await Joi.validate(book, bookSchema, { abortEarly: false });
  return await new Book(book).save();
}

async function index (obj) {
  let page = 1;
  if (obj.page) {
    page = obj.page;
    delete obj.page
  }
  let pageNum = obj.pageNum || config.paginationNum;
  if (obj.bookType === 'undefined') {
    delete obj.bookType;
  }
  if (obj.bookNum) {
    delete obj.bookNum;
  } else {
    obj.showTime = { $lte: new Date() }
  }
  if (obj.tags) {
    obj.tags = { $all: obj.tags.split(',') }
  }
  if (obj.count) {
    delete obj.count
    return await Book.find(obj).countDocuments();
  } else {
    return await Book.find(obj).select('-content').sort({ '_id': -1 }).skip((page - 1) * pageNum).limit(pageNum);
  }
}

async function count (obj) {
  return await Book.find().sort({ '_id': -1 }).countDocuments();
}

async function detail (id) {
  return await Book.findById(id).select('-content')
}

async function getBookContent(obj){
  let book = await Book.findById(obj.id);
  let page = obj.page || 1;
  let pageNum = obj.pageNum || 2000;
  book.content = book.content.substring(((page-1)*pageNum), (page*pageNum))
  book.page = page;
  book.pageNum = pageNum;
  return book;
}

async function update (book, id) {
  let bookTmp = await Book.findById(id)
  book.content = bookTmp.content;
  return await Book.findByIdAndUpdate(id, book)
}

async function destroy (id) {
  return await Book.findByIdAndRemove(id)
}