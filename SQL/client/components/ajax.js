import fetch from 'node-fetch';
// run this before component mounting?
// node-fetch may have IE errors
// isomorphic-fetch

export function getRating (movie) {
  return fetch(`http://localhost:8081/api/movies/${movie}/rating`)
    .then(response => response.json())
}

// don't want this to be returning in array
export function loadReviews (movie) {
  return fetch(`http://localhost:8081/api/movies/${movie}/reviews`)
    .then(response => response.json())
}
