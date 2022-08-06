const express = require('express');
var postRouter = require('./posts');

module.exports = function(app) {
  app.use(express.json());

  app.use('/posts', postRouter);
}