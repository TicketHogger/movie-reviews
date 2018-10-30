import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const { review } = props;
  return (
    <div className="review">
      {review.Review}
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.string.isRequired
  // fix this later with shapeOf
  // https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape
};

export default Review;
