import React from 'react';
import { shallow } from 'enzyme';
import MovieThumb from './MovieThumb';

describe('<MovieThumb />', () => {
  test('renders', () => {
    const wrapper = shallow(<MovieThumb />);
    expect(wrapper).toMatchSnapshot();
  });
});
