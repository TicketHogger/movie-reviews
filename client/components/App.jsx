import React from 'react';
import fetch from 'isomorphic-fetch';
import Rating from './Rating';
import ReviewList from './ReviewList';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      reviews: []
    };
    /*eslint-disable */
      /* eslint-enable */
  }

  componentDidMount () {
    this.loadReviews();
  }

  loadReviews () {
    // fetch('/api/movies/1/reviews', {
    //   method: 'GET',
    //   mode: 'cors'
    // })
    fetch('/api/movies/1/reviews')
      .then(response => response.json())
      .then((data) => {
        this.setState({ reviews: data });
      });
  }

  render () {
    const { reviews } = this.state;
    return (
      <div className="review-container">
        <div className="title-bar">
          <b>
            FAN REVIEWS
          </b>
        </div>
        <div id="overall-rating">
          <Rating stars={3} />
        </div>
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}
export default App;
