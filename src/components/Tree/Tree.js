import React from "react";

import classes from "./Tree.module.scss";

import Leaf from "./Leaf/Leaf";

const tree = (props) => (
  <div className={classes.Tree}>
    <Leaf />
    <div className={classes.Trunk}></div>
  </div>
);

export default tree;
