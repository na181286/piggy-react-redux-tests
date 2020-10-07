import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Filters, { Filter } from "./Filters";

configure({ adapter: new Adapter() });

describe("<Filters />", () => {
  it("should render two <Filter /> elements if not authenticated", () => {
    const wrapper = shallow(<Filters />);
    wrapper.setProps({
      title: "Color",
      onChanged: () => {},
      value: "red",
      options: ["purple", "red", "green", "blue", "yellow", "grey"],
    });

    expect(wrapper.find(Filter)).toHaveLength(2);

    
  




  });
});
