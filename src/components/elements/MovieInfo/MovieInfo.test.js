import React from 'react';
import { shallow } from 'enzyme';
import MovieInfo from './MovieInfo';

describe('<MovieInfo />', () => {
  test('renders', () => {
    const wrapper = shallow(<MovieInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
