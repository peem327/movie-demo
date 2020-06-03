import React from 'react';
import { shallow } from 'enzyme';
import LoadMoreBtn from './LoadMoreBtn';

describe('<LoadMoreBtn />', () => {
  test('renders', () => {
    const wrapper = shallow(<LoadMoreBtn />);
    expect(wrapper).toMatchSnapshot();
  });
});
