const faker = require('faker');
const fs = require('fs');

const db = 'movies';
const sqlFileUrl = 'schema.sql';
const rows = 10;

for (let i = 0; i < rows; i++) {
  let titleLength = Math.floor(Math.random() * 5) + 1; // 1-5

  let username = '\"' + faker.internet.userName().replace('.', ' ') + '\"';
  let title = '\"' + faker.lorem.sentence(titleLength).replace('.', '') + '\"'; // title of review
  let moozRating = Math.floor(Math.random() * 5) + 1; // rating system
  let reviewText = '\"' + faker.lorem.paragraph() + '\"';
  let helpfulReviews = Math.floor(Math.random() * 300);

  let sqlCommand = `INSERT INTO ${db} (Username, Title, Mooz, Review, Helpful) VALUES (${username}, ${title}, ${moozRating}, ${reviewText}, ${helpfulReviews});\n`;

  fs.appendFile(sqlFileUrl, sqlCommand, err => {
    if (err) {
      console.log('Sql file write failure', err);
    } else {
      // console.log('Successful write to .sql');
    }
  });
}

/*
CREATE DATABASE IF NOT EXISTS fandango;
use fandango;

DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  Username VARCHAR(50) NOT NULL,
  Title VARCHAR(50),
  Mooz INT NOT NULL,
  Review VARCHAR(500),
  Helpful INT,
  PRIMARY KEY (id)
);
*/