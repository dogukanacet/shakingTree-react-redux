import React from "react";

import classes from "./Tree.module.scss";

import Leaves from "./Leaves/Leaves";

const tree = (props) => {
  
  return (
    <div className={classes.Tree}>
      <Leaves />
      <div className={classes.Trunk}></div>
    </div>
  );
};

export default tree;
