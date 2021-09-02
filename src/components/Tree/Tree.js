import React, { Component } from "react";

import classes from "./Tree.module.scss";

import Leaves from "./Leaves/Leaves";

class Tree extends Component {
  render() {
    return (
      <div
        appleid={this.props.appleid}
        onClick={this.props.clicked}
        className={classes.Tree}
      >
        <Leaves />
        <div className={classes.Trunk}></div>
      </div>
    );
  }
}

export default Tree;
