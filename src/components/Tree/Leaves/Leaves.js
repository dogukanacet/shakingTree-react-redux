import React from "react";

import classes from "./Leaves.module.scss";

const leaves = () => {
  return (
    <div className={classes.LeavesContainer}>
      <div className={`${classes.Leaves} ${classes.Main}`}></div>
      <div className={`${classes.Leaves} ${classes.Top}`}></div>
      <div className={`${classes.Leaves} ${classes.Middle}`}></div>
      <div className={`${classes.Leaves} ${classes.Bottom}`}></div>
    </div>
  );
};

export default leaves;
