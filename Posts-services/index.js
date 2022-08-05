require('dotenv').config()
const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');
const mysql = require('mysql');
const { query } = require('express');

const app = express();
app.use(cors());
var jsonParser = bodyParser.json({ type: 'application/json' });
const port = 3001;

const table = 'posts';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'social_media'
})

connection.connect();

app.get('/posts', (req, res) => {
  const query = `SELECT * FROM ${table}`;
  const result = connection.query(query, (err, rows, fields) => {
    if(err) throw err;
    res.send(rows);
  });
});

app.post('/new_post', jsonParser, (req, res) => {
  try {
    const { author, date, content, likes } = req.body;

    const date_created = new Date(date).toJSON().slice(0,19).replace('T', ' ');

    const query = `INSERT INTO ${table} (author, date_created, date, content, likes) VALUES ('${author}', '${date_created}', '${date}', '${content}', '${likes}');`;
    connection.query(query, (err, result) => {
      if(err) throw err;
      // console.log(result);
      res.sendStatus(200);
    })
  } catch(e) {
    // bad request
    console.log(e);
    res.sendStatus(400);
  }
})

app.post('/update_likes', jsonParser, (req, res) => {
  try {
    const { postid, likes } = req.body;
    if(postid !== undefined && likes !== undefined) {
      const query = `UPDATE ${table} SET likes=${likes} WHERE postid=${postid};`
      connection.query(query, (err, result) => {
        if(err) throw err;
        res.sendStatus(200);
      })
    }
  } catch(e) {
    console.log(e);
    res.sendStatus(400);
  }
})

app.listen(port, () => {
  console.log('Listening on port 3001...');
})