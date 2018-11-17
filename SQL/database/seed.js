const faker = require('faker');

const fs = require('fs');
const file = fs.createWriteStream('./review-data.csv', { encoding: 'utf8', flags: 'a' });


file.on('drain', function() {
  write();
});
const seeder = () => {
  const start = new Date();
 
  const rows = 10000000;
  var i = 0;

  while (i < rows) {
      const titleLength = Math.floor(Math.random() * 5) + 1; // 1-5

    const id = i;
    const username = `${faker.internet.userName().toUpperCase().replace('.', ' ')}`;
    const title = `${faker.lorem.sentence(titleLength).toUpperCase().replace('.', '')}`; // title of review
    const moozRating = Math.floor(Math.random() * 5) + 1; // rating system
    const reviewText = `${faker.lorem.paragraph()}`;
    const helpfulReviews = Math.floor(Math.random() * 300);
    const movie = Math.floor(Math.random() * rows) + 1;
    //const dateWritten = faker.date.past();
    const data = `\n${id},${username},${title},${moozRating},${reviewText},${helpfulReviews},${movie}`;
    file.write(data);
    if ((i + 1) % 20000 === 0) {
      console.clear();
      console.log(`${((i / rows) * 100).toFixed(2)}% complete...`);
    }
    i++;
  }
  file.end();
  const end = new Date();
  console.log(`Took ${end - start} milliseconds to write ${rows / 1000000} million files...`);
};

seeder();


module.exports = seeder;
