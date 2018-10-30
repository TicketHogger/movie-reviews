import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from './App';

describe('A test', () => {
  it('should show a test', () => {
    expect(shallow(<App />).contains(<b>
      FAN REVIEWS
    </b>).toBe(true));
  });
});
