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

it("renders The Main Page", () => {
  expect(wrapper).toMatchSnapshot();
});
