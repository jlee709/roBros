import { shallow } from "enzyme";
import React from "react";
import AppM from "./AppM";
import MainPage from "./MainPage";

it("expects App Container to render", () => {
  const mockStore = {
    robros: [],
    searchfield: ""
  };
  expect(shallow(<MainPage sotre={mockStore} />)).toMatchSnapshot();
});
