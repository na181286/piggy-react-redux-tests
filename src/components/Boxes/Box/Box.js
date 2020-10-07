import React from "react";
import classes from "./Box.css";

const Box = (props) => {
  const styles =
    props.shape.shape !== "triangle"
      ? { backgroundColor: props.shape.color }
      : { borderBottomColor: props.shape.color };

  return (
    <div className={classes.Box}>
      <span
        style={styles}
        className={[classes.Item, classes[props.shape.shape]].join(" ")}
      />
    </div>
  );
};
export default Box;
