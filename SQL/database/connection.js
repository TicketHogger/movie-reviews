// // const pg = require('pg');

// // const connection = pg.Pool({
// //   user: 'postgres',
// //   database: 'fandango',
// //   host: '127.0.0.1',
// //   password: 'root',
// //   port: 5432
// // });

// // module.exports = connection;


// const { Pool, Client } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   host: '127.0.0.1',
//   database: 'fandango',
//   password: 'root',
//   port: 5432
// });

// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.log('error from connection.js line 11>>>', err);
//   } else {
//     console.log(null, res);
//   }
//   pool.end();
// });

// const client = new Client({
//   user: 'postgres',
//   host: '127.0.0.1',
//   database: 'fandango',
//   password: 'root',
//   port: 5432
// });
// client.connect();

// //***** DATABASE METHODS */

// const getAll = (id, callback) => {

//   const query = {
//     text: 'SELECT * FROM reviews WHERE id = 1000',
//   };
//   console.log(query);

//   client.query(query, (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//     // client.end();
//   });
// };



// const addMovie = (title, year, image, actor, callback) => {
//   const query = {
//     text: 'INSERT INTO reviews(id, username, title, mooz, review, helpful, movie) VALUES(2000, special, mytitle, 500, greatmovie, 10, 120)',
//     values: [id, username, title, mooz, review, helpful, movie],
//   };

//   client.query(query, (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//     // client.end();
//   });

// };
// module.exports = { getAll};

// const mysql = require('mysql');

// const connection = mysql.createPool({
//   // user: 'root',
//   database: 'fandango',
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   port: 3306
// //   host: 'fecreviews.c8fpikzsg3ek.us-west-1.rds.amazonaws.com',
// //   user: 'fecreviews',
// //   password: 'fecreviews',
// //   port: 3306
// });

// module.exports = connection;