import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  createStars () {
    const totalStars = 5;
    const result = [];
    const { stars } = this.props;
    for (let i = 0; i < stars; i += 1) {
      result.push(
        <span className="fa fa-star fa-lg checked" />
      );
    }
    for (let i = 0; i < totalStars - stars; i += 1) {
      result.push(
        <span className="fa fa-star fa-lg" />
      );
    }
    return result;
  }

  render () {
    return (
      <div className="ratings">
        {this.createStars() }
      </div>
    );
  }
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired
};
export default Rating;
