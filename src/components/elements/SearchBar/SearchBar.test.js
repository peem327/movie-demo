import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
