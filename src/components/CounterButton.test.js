import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import CounterButton from './CounterButton';

it('renders without crashing', () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('correnctly increments the counter', () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  expect(toJson(wrapper)).toMatchSnapshot();

  wrapper.find("[id='counter']").simulate("click"); //causes state change
  wrapper.find("[id='counter']").simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 }); //tests result of statechange
  wrapper.find("[id='counter']").simulate("keypress");
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual('red');
});