const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');
const connection = require('../database/connection.js');
const path = require('path');

const app = express();
const port = 3013;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(request, response, next) {
  response.set({
    'Access-Control-Allow-Origin': '*'
  });
  next();
});


app.get('/api/movies/:movieid/reviews', (req, res) => {
	res.send('hello');
});

app.listen(port, () => console.log("listening on port", port));