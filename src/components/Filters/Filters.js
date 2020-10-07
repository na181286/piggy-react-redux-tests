import React from "react";
import classes from "./Filters.css";

function Option({ onChange, option, value } = {}) {
  return (
    <div
      onClick={() => {
        onChange(option);
      }}
      className={[
        classes.Option,
        value.find((o) => o === option) ? classes.Selected : "",
      ].join(" ")}
    >
      {option}
    </div>
  );
}

export function Filter(props) {
  return (
    <div className={classes.Filter}>
      <div className={classes.Title}> {props.title}</div>

      {props.options.map((option, ind) => (
        <Option
          key={ind}
          onChange={props.onChanged}
          value={props.value}
          option={option}
        />
      ))}
    </div>
  );
}

const Filters = (props) => {
  return (
    <div className={classes.Filters}>
      <Filter
        title="Color"
        onChanged={props.onColorSelected}
        {...props}
        value={props.color}
        options={["purple", "red", "green", "blue", "yellow", "grey"]}
      />
      <Filter
        title="Shape"
        onChanged={props.onShapeSelected}
        {...props}
        value={props.shape}
        options={["round", "square", "triangle", "oval", "rectangle"]}
      />
    </div>
  );
};
export default Filters;
