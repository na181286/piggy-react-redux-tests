import { Layout } from "./Layout";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Filters from "../../components/Filters/Filters";
import Title from "../../components/Title/Title";
import Boxes from "../../components/Boxes/Boxes";

configure({ adapter: new Adapter() });

describe("<BurgerBuilder />", () => {
  //let wrapper;

  beforeEach(() => {
    // wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it("should render  <BuildControls /> when receiving ingredients", () => {
    let wrapper = shallow(
      <Layout
        color={["red"]}
        shape={["oval"]}
        onColorSelected = {()=>{}}
        onShapeSelected = {()=>{}}
      />
    );
    //wrapper.setProps({ings: {salad: 0, meat: 1, bacon: 1, cheese: 1}});
    expect(wrapper.find(Filters)).toHaveLength(1);
    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Boxes)).toHaveLength(1);
  });
});