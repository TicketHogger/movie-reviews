const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');
const connection = require('../database/connection.js');
const path = require('path');

const app = express();
const port = 3013;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/movies/:movie/reviews', (req, res) => {
	res.send('hello');
});

app.listen(port, () => console.log("listening on port", port));