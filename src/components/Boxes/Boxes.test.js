import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Boxes from "./Boxes";
import Box from "./Box/Box";

configure({ adapter: new Adapter() });

describe("<Boxes />", () => {
  it("should render more then 0 <Box /> elements", () => {
    const wrapper = shallow(
      <Boxes
        color={["red"]}
        shape={["oval"]}
        items={[{ shape: "oval", color: "red", id: 1 }]}
      />
    );

    expect(wrapper.find(Box).exists());
  });
});
