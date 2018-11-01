import React from 'react';
import fetch from 'isomorphic-fetch';
import Rating from './Rating';
import ReviewList from './ReviewList';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      reviews: [],
      rating: 0
    };
  }

  componentDidMount () {
    this.loadReviews();
    this.getRating();
  }

  // run this before component mounting?
  getRating () {
    fetch('/api/movies/1/rating')
      .then(response => response.json())
      .then((data) => {
        this.setState({ rating: data[0].rating });
      });
  }

  loadReviews () {
    fetch('/api/movies/1/reviews')
      .then(response => response.json())
      .then((data) => {
        this.setState({ reviews: data });
      });
  }

  render () {
    const { reviews, rating } = this.state;
    return (
      <div className="review-container">
        <div className="title-bar">
          <b>
            FAN REVIEWS
          </b>
        </div>
        <div id="overall-rating">
          <Rating stars={rating} />
        </div>
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}
export default App;
