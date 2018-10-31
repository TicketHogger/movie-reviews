/*eslint-disable */
import React from 'react';
import {
  shallow, mount, render
} from 'enzyme';

import App from './components/App';

describe('A test', () => {
  it('should show a test', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<b>FAN REVIEWS</b>)).toBe(true);
  });
});

// test('Some sketchy test', () => {
//   const wrapper = shallow(<App />);
//   expect(wrapper).toContainMatchingElements(1, '.App');
// });
/* eslint-enable */
