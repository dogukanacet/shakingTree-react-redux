import React from "react";

import classes from "./Leaves.module.scss";

import Apple from "../../Apple/Apple";

let arr = new Array(13).fill(0);
const apples = arr.map((_) => {
  return <Apple />;
});

const leaf = (props) => {
  return (
    <div className={classes.LeavesContainer}>
      <div className={classes.Apples}>{apples}</div>
      <div className={`${classes.Leaves} ${classes.Main}`}></div>
      <div className={`${classes.Leaves} ${classes.Top}`}></div>
      <div className={`${classes.Leaves} ${classes.Middle}`}></div>
      <div className={`${classes.Leaves} ${classes.Bottom}`}></div>
    </div>
  );
};
export default leaf;
