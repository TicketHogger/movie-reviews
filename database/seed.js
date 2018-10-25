const faker = require('faker');
const fs = require('fs');

const db = 'movies';
const sqlFile = 'schema.sql';


let titleLength = Math.floor(Math.random() * 5) + 1; // 1-5


let username = '\"' + faker.internet.userName().replace('.', ' ') + '\"';
let title = '\"' + faker.lorem.sentence(titleLength).replace('.', '') + '\"';
let mooz = Math.floor(Math.random() * 5) + 1;
let review = '\"' + faker.lorem.paragraph() + '\"';
let helpful = Math.floor(Math.random() * 300);

let sqlCommand = `INSERT INTO ${db} (Username, Title, Mooz, Review, Helpful) values (${username}, ${title}, ${mooz}, ${review}, ${helpful})\n`;


fs.appendFile(sqlFile, sqlCommand, err => {
  if (err) {
    console.log('Sql file write failure', err);
  } else {
    console.log('Successful write to .sql');
  }
});