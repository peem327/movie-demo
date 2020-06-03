import React from 'react';
import { shallow } from 'enzyme';
import MovieInfoBar from './MovieInfoBar';

describe('<MovieInfoBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<MovieInfoBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
