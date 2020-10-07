import React, { Component } from "react";
import Auxhoc from "../AuxHOC/Auxhoc";
import { connect } from "react-redux";
import Filters from "../../components/Filters/Filters";
import Title from "../../components/Title/Title";
import Boxes from "../../components/Boxes/Boxes";
import * as actions from "../../store/actions/index";
import * as shapes from "../../api/shapes.json";
export class Layout extends Component {
  state = {
    shapes: shapes,
  };

  render() {
    return (
      <Auxhoc>
        <Filters
          color={this.props.color}
          shape={this.props.shape}
          onColorSelected={this.props.onColorSelected}
          onShapeSelected={this.props.onShapeSelected}
        />
        <Title color={this.props.color} shape={this.props.shape} />
        <Boxes
          items={this.state.shapes}
          color={this.props.color}
          shape={this.props.shape}
        />
      </Auxhoc>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    color: state.filter.color,
    shape: state.filter.shape,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onColorSelected: (color) => dispatch(actions.setColor(color)),
    onShapeSelected: (shape) => dispatch(actions.setShape(shape)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
