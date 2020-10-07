import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Title from './Title'

configure({ adapter: new Adapter() });

describe("<Title />", () => {
  it("should render one <span /> element " , () => {
      const wrapper = shallow(<Title color ={["red"]} shape ={["oval"]}/>);
      expect(wrapper.find('span')).toHaveLength(1)

  });
});