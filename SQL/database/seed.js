const faker = require('faker');

const fs = require('fs');
const file = fs.createWriteStream('./review-data.csv1', { encoding: 'utf8', flags: 'a' });
const file2 = fs.createWriteStream('./movie-data.csv1', { encoding: 'utf8', flags: 'a' });



file.on('drain', function() {
  write();
});

file2.on('drain', function() {
  write();
});

const seeder = () => {
  const start = new Date();
 
  const rows = 5000;

  for (let i = 1; i < rows/1000 + 1; i += 1) {
    const titleLength = Math.floor(Math.random() * 3) + 1;
    const id = i;
    const title = `${faker.lorem.sentence(titleLength).toUpperCase().replace('.', ' ')}`;
    const data = `\n${id},${title}`;
    file2.write(data);
  }
  file2.end();

  var i = 1;

  while (i < rows) {
      const titleLength = Math.floor(Math.random() * 5) + 1; // 1-5

    const id = i;
    const Username = `${faker.internet.userName().toUpperCase().replace('.', ' ')}`;
    const Title = `${faker.lorem.sentence(titleLength).toUpperCase().replace('.', '')}`; // title of review
    const Mooz = Math.floor(Math.random() * 5) + 1; // rating system
    const Review = `${faker.lorem.paragraph()}`;
    const Helpful = Math.floor(Math.random() * 300);
    const Movie = Math.floor(Math.random() * 100) + 1;
    //const dateWritten = faker.date.past();
    const data = `\n${id},${Username},${Title},${Mooz},${Review},${Helpful},${Movie}`;
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

