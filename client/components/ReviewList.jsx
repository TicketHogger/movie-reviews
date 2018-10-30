import React from 'react';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = (props) => {
  const { reviews } = props;
  return (
    <div className="review-list">
      Reviews:
      { reviews.map((review, index) => (
        <Review review={review} />))
        // <div>
        //   {console.log(review)}
        // </div>))
      }
    </div>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
  // fix this later with shapeOf
  // https://stackoverflow.com/questions/32325912/react-proptype-array-with-shape
};

export default ReviewList;
