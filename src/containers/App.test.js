import { shallow } from "enzyme";
import React from "react";
import App from "./App";

it("expects App Container to render", () => {
  const mockStore = {
    robros: [],
    searchfield: ""
  };
  expect(shallow(<App sotre={mockStore} />)).toMatchSnapshot();
});
