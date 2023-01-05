import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import CardList from './CardList';

it('renders CardList', () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Smith",
      username: "John",
      email: "john@gmail.com"
    }
  ]

  const wrapper = shallow(<CardList robots={mockRobots} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});