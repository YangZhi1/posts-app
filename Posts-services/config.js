require('dotenv').config();
var mysql = require('mysql');
const { reset } = require('nodemon');

const config = {
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD,
  database: 'social_media'
}

const connection = mysql.createConnection(config);

async function getDb(query) {
  return new Promise((resolve, reject) => {
    try {
      connection.query(query, (err, rows, fields) => {
        if(err) reject(err);
        resolve(rows);
      })
    } catch(e) {
      console.log(e);
      reject(e);
    }
  })
}

async function postDb(query) {
  return new Promise((resolve, reject) => {
    try {
      connection.query(query, (err, result) => {
        if(err) throw err;
        return 200;
      })
    } catch(e) {
      console.log('Error posting to mysql:', e);
      return 400;
    }
  })
}

module.exports = {
  getDb,
  postDb,
}