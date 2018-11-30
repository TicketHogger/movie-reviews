import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review.jsx';

const ReviewList = (props) => {
  const { reviews } = props;
  return (
    <div className="review-list">
      { reviews.map(review => (
        <Review key={review.username} review={review} />))
      }
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    review: PropTypes.shape({
      title: PropTypes.string,
      mooz: PropTypes.number,
      username: PropTypes.string,
      review: PropTypes
    })
  })).isRequired
};

export default ReviewList;
