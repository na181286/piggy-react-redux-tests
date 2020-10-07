import React from "react";
import classes from "./Title.css";

function Capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Title = (props) => {
  let title = "All items";

  if (props.color.length === 1 && props.shape.length === 1) {
    title = Capitalize(props.shape[0]) + " " + props.color[0] + " items";
  } else {
    if (props.color.length === 6 && props.shape.length === 1) {
      title = "All " + props.shape[0] + " items";
    } else {
      if (props.color.length === 1 && props.shape.length === 5) {
        title = "All " + props.color[0] + " items";
      } else {
        if (props.color.length > 1 && props.shape.length > 1) {
          title = "Multiple items";
        } else {
          if (props.color.length === 1 && props.shape.length > 1) {
            title = "Multiple " + props.color[0] + " items";
          } else {
            if (props.color.length > 1 && props.shape.length === 1) {
              title = "Multiple " + props.shape[0] + " items";
            }
          }
        }
      }
    }
  }

  return <h2 className={classes.Title}><span>{title}</span></h2>;
};
export default Title;
