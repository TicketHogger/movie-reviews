/*eslint-disable */
import React from 'react';
import {
  shallow, mount, render
} from 'enzyme';

import App from './components/App';

describe('Testing App component', () => {
  it('title bar should render', () => {
    const wrapper = mount(<App />);
    expect(wrapper.contains(<b>FAN REVIEWS</b>)).toBe(true);
    expect(wrapper.find('.title-bar')).toHaveLength(1);
  });

  // it('getUser() should return data', () => {
  //   return App.getRating()
  //     .then(data => {
  //       expect(data).toBeDefined()
  //     })
  // })
});
