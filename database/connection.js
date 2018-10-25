const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'mike',
  database: 'fandango'
});

module.exports = connection;