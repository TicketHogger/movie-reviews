import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
  configure, shallow, mount, render
} from 'enzyme';

import App from './components/App';

configure({ adapter: new Adapter() });

// describe('A test', () => {
//   it('should show a test', () => {
//     expect(shallow(<App />).contains(
//       <b>
//         FAN REVIEWS
//       </b>
//     ).toBe(true));
//   });
// });
