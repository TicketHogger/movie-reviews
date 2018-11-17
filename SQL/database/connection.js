const pg = require('pg');

const connection = pg.Pool({
  user: 'postgres',
  database: 'fandango',
  host: '127.0.0.1',
  password: 'root',
  port: 5432
});

module.exports = connection;
