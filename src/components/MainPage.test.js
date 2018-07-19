import { shallow } from "enzyme";
import React from "react";
import App from "../containers/App";
import MainPage from "./MainPage";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobros: jest.fn(),
    robros: [],
    searchfield: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("Renders The Main Page, no crash", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters the robros", () => {
  const mockProps2 = {
    onRequestRobros: jest.fn(),
    robros: [
      {
        id: 7,
        name: "John Wick",
        email: "withapencil@gmail.com "
      }
    ],
    searchfield: "John Wick",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);

  expect(wrapper2.instance().filteredRobros()).toEqual([
    {
      id: 7,
      name: "John Wick",
      email: "withapencil@gmail.com "
    }
  ]);
});
