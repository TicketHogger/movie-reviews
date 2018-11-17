# Movie Reviews
Display detailed information about a movie



## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Endpoints](#Endpoints)
3. [Development](#development)
4. [Seeding](#seeding)
5. [Testing](#testing)

## Usage

Make sure to seed database if testing.
```sh
npm run build
npm start
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc


## Endpoints

| Action        | Request       | Route            |  Purpose  |
| ------------- | -------------| ----------------| ---------------|
| Create        | POST          | /api/movies/:movieId/review | insert new review |
| Read          | GET           | /api/movies/:movieId/review | read reviews |
| Update        | PUT           | /api/movies/:movieId/review | update a review |
| Delete        | DELETE        | /api/movies/:movieId/review | delete a review |


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Seeding

From /database:
Change connection.js file if user is not root
```sh
node seed.js
```

From root:
```sh
npm run seed-db
```

If getting mysql version error try from mysql shell:
```sh
SHOW GLOBAL VARIABLES LIKE 'local_infile';
```

If value is false, set with:
```sh
SET GLOBAL local_infile = true;
```

## Testing
```sh
npm test
```