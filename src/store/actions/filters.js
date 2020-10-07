import * as actionTypes from "./actionTypes";
export const setColor = (color) => {
  console.log(color)
    return {
      type: actionTypes.SET_COLOR,
      color: color,
    };
  };

  export const setShape = (shape) => {
    return {
      type: actionTypes.SET_SHAPE,
      shape: shape,
    };
  };