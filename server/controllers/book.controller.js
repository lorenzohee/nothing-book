const Book = require('../models/book.model');
const config = require('../config/config')

module.exports = {
  insert, index, update, destroy, detail, getBookContent
}

async function insert (book) {
  return await new Book(book).save();
}

async function index (obj) {
  let page = 1;
  if (obj.page) {
    page = obj.page;
    delete obj.page
  }
  if(obj.search) {
    obj.name = {$regex: obj.search}
    delete obj.search;
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

async function detail (id) {
  return await Book.findById(id).select('-content')
}

async function getBookContent(obj){
  let book = await Book.findById(obj.id);
  let page = obj.page || 1;
  let pageNum = obj.pageNum || 2000;
  let strStart = page > 1 ? (page-1) * pageNum-50 : 0;
  let strEnd = page*pageNum
  book.content = book.content.substring(strStart, strEnd)
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