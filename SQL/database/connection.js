const mysql = require('mysql');
const pg = require('pg');

const connection = pg.Pool({
  // user: 'root'
  user: 'postgres',
  database: 'fandango',
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  port: 5432
//   host: 'fecreviews.c8fpikzsg3ek.us-west-1.rds.amazonaws.com',
//   user: 'fecreviews',
//   password: 'fecreviews',
//   port: 3306
//
});

module.exports = connection;
