import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

it("expects a CounterButton to render", () => {
  const mockColor = "blue";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("increments the counter", () => {
  const mockColor = "blue";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
});
