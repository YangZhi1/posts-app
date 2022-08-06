require('dotenv').config()
const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
app.use(cors());
var jsonParser = bodyParser.json({ type: 'application/json' });
const port = process.env.PORT || 3001;

const post_table = 'posts';

require('./routes/index')(app);

app.post('/update_likes', jsonParser, (req, res) => {
  try {
    const { postid, likes } = req.body;
    if(postid !== undefined && likes !== undefined) {
      const query = `UPDATE ${post_table} SET likes=${likes} WHERE postid=${postid};`
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
  console.log(`Listening on port ${port}...`);
})