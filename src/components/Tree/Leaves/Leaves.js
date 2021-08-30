import React from "react";

import classes from "./Leaves.module.scss";

import Apple from "../../Apple/Apple";

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const apples = arr.map((apple) => {
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
