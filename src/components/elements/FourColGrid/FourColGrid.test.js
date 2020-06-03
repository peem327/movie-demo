import React from 'react';
import { shallow } from 'enzyme';
import FourColGrid from './FourColGrid';

describe('<FourColGrid />', () => {
  test('renders', () => {
    const wrapper = shallow(<FourColGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
