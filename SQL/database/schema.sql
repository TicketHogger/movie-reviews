DROP DATABASE IF EXISTS fandango;
CREATE DATABASE fandango;
drop table if exists reviews;
drop table if exists movies;


CREATE TABLE movies
(

  id serial,
  Title VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE reviews
(

  id serial,
  Username VARCHAR(50) NOT NULL,
  Title VARCHAR(500),
  Mooz INT NOT NULL,
  Review VARCHAR(500),
  Helpful INT DEFAULT 0,
  Movie INT NOT NULL,
  PRIMARY KEY (id)

);



\COPY reviews FROM 'review-data.csv' DELIMITER ',' CSV HEADER;
\COPY movies FROM 'movie-data.csv' DELIMITER ',' CSV HEADER;
