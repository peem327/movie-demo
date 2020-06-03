import React from 'react';
import { shallow } from 'enzyme';
import Actor from './Actor';

describe('<Actor />', () => {
  test('renders', () => {
    const wrapper = shallow(<Actor />);
    expect(wrapper).toMatchSnapshot();
  });
});
