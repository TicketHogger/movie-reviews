import React from 'react';
import PropTypes from 'prop-types';

const createRange = (start, end) => {
  const range = [];
  for (let i = start; i <= end; i += 1) {
    range.push(i);
  }
  return range;
};

class Pagination extends React.Component {
  constructor (props) {
    super(props);
    const { totalReviews, displayItems } = props;
    this.displayItems = displayItems; // show on one page
    this.totalReviews = totalReviews; // all items

    this.state = {
      currentPage: 1,
      pages: 2,
      totalPages: Math.ceil(this.totalReviews / this.displayItems)
    };
  }

  getNumbers () {
    const { currentPage, pages, totalPages } = this.state;
    const totalPages = pages * 2 + 3;
    const totalDisplays = totalPages + 2;

    if (totalPages > totalDisplays) {
      const start = Math.max(2, currentPage - pages);
      const end = Math.min(totalPages - 1, currentPage + pages);
      const allPages = range(start, end);

      const left = start > 2;
      const right = (totalPages - end) > 1;
      const shifted = totalPages - (allPages.length + 1);

      if (!left && right) {

      }
    }
  }
}

Pagination.propTypes = {
  totalReviews: PropTypes.number.isRequired,
  displayItems: PropTypes.number.isRequired
};

export default Pagination;
