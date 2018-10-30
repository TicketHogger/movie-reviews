import React from 'react';
import Rating from './Rating';
import ReviewList from './ReviewList';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      placeholder: 0
    };
    /*eslint-disable */
    // this.num = 'check';
    this.reviews = [
      {
        "id": 87,
        "Username": "Karianne Heidenreich",
        "Title": "Perspiciatis veritatis perspiciatis",
        "Mooz": 5,
        "Review": " Atque quae atque exercitationem placeat. Ipsum enim aut aliquam eos minima expedita deleniti rerum. Odit eveniet harum. Nemo et et odio.",
        "Helpful": 298
      },
      {
        "id": 8,
        "Username": "Newell_Johnston17",
        "Title": "Nihil vitae voluptas aut modi",
        "Mooz": 3,
        "Review": "Provident ipsum occaecati qui non. Sed est distinctio fugit at id optio minus modi cupiditate. Aspernatur tempora reprehenderit. Voluptas pariatur deleniti sed sunt debitis et.",
        "Helpful": 298
      },
      {
        "id": 9,
        "Username": "Bettye28",
        "Title": "Magni",
        "Mooz": 1,
        "Review": "Quasi autem quo ab a. Quod sit expedita assumenda eius reiciendis dolorem. Repellat excepturi quia. Doloremque explicabo fugit consequuntur similique quo ut ut minima. Sed quod natus sint magnam enim quam vel omnis nostrum.",
        "Helpful": 294
      }];
      /* eslint-enable */
  }

  render () {
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
        <ReviewList reviews={this.reviews} />
        <div className="test">
          {console.log(this.reviews)}
        </div>
      </div>
    );
  }
}
export default App;
