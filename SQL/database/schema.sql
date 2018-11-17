DROP DATABASE IF EXISTS fandango;
CREATE DATABASE fandango;
drop table if exists reviews;
drop table if exists movies;


CREATE TABLE movies
(

  id serial,
  title VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE reviews
(

  id serial,
  username VARCHAR(50) NOT NULL,
  title VARCHAR(500),
  mooz INT NOT NULL,
  review VARCHAR(500),
  helpful INT DEFAULT 0,
  movie INT NOT NULL,
  PRIMARY KEY (id)

);



COPY reviews FROM '/home/jawad10/Desktop/ticket-hoggler/movie-reviews/SQL/database/review-data.csv' DELIMITER ',' CSV HEADER;
-- COPY movies FROM '/home/jawad10/Desktop/ticket-hoggler/movie-reviews/SQL/database/-data2.csv' DELIMITER ',' CSV HEADER;

