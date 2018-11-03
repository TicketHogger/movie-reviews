import fetch from 'node-fetch';
// run this before component mounting?
// node-fetch may have IE errors
// isomorphic-fetch

export function getRating () {
  return fetch('/api/movies/1/rating')
    .then(response => response.json());
}

export function loadReviews () {
  return fetch('/api/movies/1/reviews')
    .then(response => response.json());
}
