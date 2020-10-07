import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Box from "./Box";

configure({ adapter: new Adapter() });

it("should render one <span /> element", () => {
  let wrapper = shallow(<Box shape={{ id: 1, color: "red", shape: "oval" }} />);

  expect(wrapper.find("span")).toHaveLength(1);
});
