import React from 'react';
import Rating from './Rating';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      placeholder: 0
    };
  }

  render () {
    return (
      <div className="review-container">
        <div className="title-bar">
          FAN REVIEWS
          <Rating stars={3} />
        </div>
      </div>
    );
  }
}
export default App;
