import fetch from 'node-fetch';
// run this before component mounting?
// node-fetch may have IE errors
// isomorphic-fetch

export function getRating (component) {
  return fetch('/api/movies/1/rating')
    .then(response => response.json())
    .then((data) => {
      component.setState({ rating: data[0].rating });
    });
}

export function loadReviews (component) {
  return fetch('/api/movies/1/reviews')
    .then(response => response.json())
    .then((data) => {
      component.setState({ reviews: data });
    });
}
