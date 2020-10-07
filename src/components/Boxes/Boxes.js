import React from "react";
import Box from "./Box/Box";
import classes from "./Boxes.css";

const Boxes = (props) => {
  let boxes = props.items.filter(
    (box) =>
      props.color.find((c) => box.color === c) &&
      props.shape.find((c) => box.shape === c)
  );

  return (
    <div className={classes.Boxes}>
      {boxes && boxes.map((shape) => <Box key={shape.id} shape={shape} />)}
    </div>
  );
};

export default Boxes;
