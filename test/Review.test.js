/*eslint-disable */
import React from 'react';
import {
  shallow, mount, render
} from 'enzyme';

import App from '../client/components/App';
import Rating from '../client/components/Rating';
// import { getRating, loadReviews } from './components/ajax';

describe('Testing App component', () => {
  it('title bar should render', () => {
    const wrapper = mount(<App />);
    expect(wrapper.contains(<b>FAN REVIEWS</b>)).toBe(true);
    expect(wrapper.find('.title-bar')).toHaveLength(1);
  });
});

describe('Testing Rating component', () => {
  const wrapper = shallow(<Rating stars={1.5}/>);
  it('colored stars should render', () => {
    expect(wrapper.find('span.checked')).toHaveLength(5);
  });
  it('all stars should render', () => {
    expect(wrapper.find('span.fa-star')).toHaveLength(10);
  });
});