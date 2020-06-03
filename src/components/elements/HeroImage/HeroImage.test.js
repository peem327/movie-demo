import React from 'react';
import { shallow } from 'enzyme';
import HeroImage from './HeroImage';

describe('<HeroImage />', () => {
  test('renders', () => {
    const wrapper = shallow(<HeroImage />);
    expect(wrapper).toMatchSnapshot();
  });
});
