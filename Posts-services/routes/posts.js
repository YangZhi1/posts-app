const express = require('express')
const router = express.Router()

const config = require('../config.js');

const post_table = "posts";

router.get('/', (req, res) => {
  const query = `SELECT * FROM ${post_table}`;
  const result = config.getDb(query)
  .then(data => {
    res.send(data);
  })
});

router.post('/new_post', (req, res) => {
  const { author, date, content, likes } = req.body;
  const date_created = new Date(date).toJSON().slice(0,19).replace('T', ' ');

  const query = `INSERT INTO ${post_table} (author, date_created, date, content, likes) VALUES ('${author}', '${date_created}', '${date}', '${content}', '${likes}');`;
  
  const response = config.postDb(query)
  .then(response => {
    res.sendStatus(response);
  })
})

module.exports = router;
