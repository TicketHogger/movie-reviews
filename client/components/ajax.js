import fetch from 'node-fetch';

export function getRating (component) {
  console.log('get');
  return fetch('/api/movies/1/rating')
    .then(response => response.json())
    .then((data) => {
      component.setState({ rating: data[0].rating });
    });
}

export function loadReviews (component) {
  console.log('load');
  return fetch('/api/movies/1/reviews')
    .then(response => response.json())
    .then((data) => {
      component.setState({ reviews: data });
    });
}
