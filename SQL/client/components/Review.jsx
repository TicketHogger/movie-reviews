import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating.jsx';

const Review = (props) => {
  const { review } = props;
  return (
    <div className="review">
      <Rating stars={review.mooz} />
      <div className="review-title">
        <b>
          {review.title}
        </b>
      </div>
      <div className="review-username">
        BY
        {` ${review.username}`}
      </div>
      <div className="review-text">
        {review.review}
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string,
    mooz: PropTypes.number,
    username: PropTypes.string,
    review: PropTypes.string
  }).isRequired
};

export default Review;
