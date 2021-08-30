import React from "react";

import classes from "./Apple.module.scss";

const apple = (props) => {
  return (
    <div className={classes.Apple}>
      <div className={classes.Right}></div>
      <div className={classes.Left}></div>
    </div>
  );
};

export default apple;
