import React from "react";

import Apple from "../../Apple/Apple";

import classes from "./Leaf.module.scss";

const leaf = (props) => {
  return (
    <div className={classes.LeavesContainer}>
      <div className={classes.LeavesTop}></div>
      <div className={classes.LeavesMiddle}></div>
      <div className={classes.LeavesBottom}></div>
      <div className={classes.LeavesMain}></div>
    </div>
  );
};
export default leaf;
