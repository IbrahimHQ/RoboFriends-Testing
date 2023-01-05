import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from './Card';

it('renders Card', () => {
  const wrapper = shallow(<Card />);
  expect(toJson(wrapper)).toMatchSnapshot();
});