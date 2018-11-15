const mysql = require('mysql');

const connection = mysql.createPool({
  // user: 'root',
  database: 'fandango',
  host: process.env.RDS_HOSTNAME,
  user: 'root',
  password: 'root',
  port: process.env.RDS_PORT
//   host: 'fecreviews.c8fpikzsg3ek.us-west-1.rds.amazonaws.com',
//   user: 'fecreviews',
//   password: 'fecreviews',
//   port: 3306
});

module.exports = connection;
