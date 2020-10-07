import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  color: ["purple", "red", "green", "blue", "yellow", "grey"],
  shape: ["round", "oval", "rectangle", "square", "triangle"],
};

const updateColor = (state, action) => {
  let colors = [...state.color];
  
  if (colors.find((c) => c === action.color)) {
    colors = colors.filter((c) => c !== action.color);
  } else {
    colors.push(action.color);
  }

  if (colors.length === 0) {
    colors = initialState.color;
  }
  return updateObject(state, {
    color: colors,
  });
};

const updateShape = (state, action) => {
  let shapes = [...state.shape];
  if (shapes.find((c) => c === action.shape)) {
    shapes = shapes.filter((c) => c !== action.shape);
  } else {
    shapes.push(action.shape);
  }

  if (shapes.length === 0) {
    shapes = initialState.shape;
  }

  return updateObject(state, {
    shape: shapes,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_COLOR:
      return updateColor(state, action);

    case actionTypes.SET_SHAPE:
      return updateShape(state, action);

    default:
      return state;
  }
};

export default reducer;
