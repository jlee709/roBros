import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expects a CardList to render", () => {
  const mockRobros = [
    {
      id: 1,
      name: "Allan turing",
      username: "machinima",
      email: "theend@isnear.com",
      alias: "theHunter"
    }
  ];
  expect(shallow(<CardList robros={mockRobros} />)).toMatchSnapshot();
});
