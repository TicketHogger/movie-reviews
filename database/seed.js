const faker = require('faker');
const fs = require('fs');

const db = 'movies';
const fileUrl = 'data.csv';
const rows = 5;

const columns = 'username, title, mooz, review, helpful';

fs.writeFile(fileUrl, columns, err => {
  if (err) {
    console.log('Data file title write failture', err);
  }
});

for (let i = 0; i < rows; i++) {
  let titleLength = Math.floor(Math.random() * 5) + 1; // 1-5

  let id = i;
  let username = '"' + faker.internet.userName().replace('.', ' ') + '"';
  let title = '"' + faker.lorem.sentence(titleLength).replace('.', '') + '"'; // title of review
  let moozRating = Math.floor(Math.random() * 5) + 1; // rating system
  let reviewText = '"' + faker.lorem.paragraph() + '"';
  let helpfulReviews = Math.floor(Math.random() * 300);

  let data = '\n' + id + ',' + username + ',' + title + ',' + moozRating + ',' +  reviewText + ',' +  helpfulReviews;
  fs.appendFile(fileUrl, data, err => {
    if (err) {
      console.log('Data file write failure', err);
    } else {
      // console.log('Successful write to .csv');
    }
  });
}