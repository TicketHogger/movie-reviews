require('newrelic');
const compression = require('compression');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const port = 8081;
const app = express();
app.use(compression());

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use((request, response, next) => {
  response.set({
    'Access-Control-Allow-Origin': '*'
  });
  next();
});

app.use(bodyParser.json());

const client = new Client ({
  user: 'postgres',
  host: '3.17.14.32',
  database: 'postgres',
  password: 'root',
  port: 5432
});
client.connect();


app.get('/api/movies/:movieid/rating', (req, res) => {
  client.query(`SELECT AVG(Mooz) FROM reviews WHERE movie = ${req.params.movieid}`, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      const round = Math.round(results.rows[0].avg * 10) / 10;
      results.rating = round.toFixed(1);
      res.status(200).send(results);
    }
  });
});

app.get('/loaderio-c48c9878246bcd1ef0bf2ad6080a5697', (req, res) => {
  res.send('loaderio-c48c9878246bcd1ef0bf2ad6080a5697');
});

app.get('/api/movies/:movieid/reviews', (req, res) => {
  // console.log('from get', req.params.movieid);
  // client.connect();
  client.query(`SELECT * FROM reviews WHERE movie = ${req.params.movieid} ORDER BY helpful DESC LIMIT 100`, (err, results) => {
    // console.log('from results', results);
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => console.log('listening on port', port));


module.exports = app;
