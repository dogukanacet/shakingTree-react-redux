import React from "react";

import { connect } from "react-redux";

import classes from "./Leaves.module.scss";

import Apple from "../../Apple/Apple";

const leaves = (props) => {

  return (
    <div className={classes.LeavesContainer}>
      <div className={`${classes.Leaves} ${classes.Main}`}></div>
      <div className={`${classes.Leaves} ${classes.Top}`}></div>
      <div className={`${classes.Leaves} ${classes.Middle}`}></div>
      <div className={`${classes.Leaves} ${classes.Bottom}`}></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    treeArray: state.treeArray,
  };
};

export default connect(mapStateToProps)(leaves);
