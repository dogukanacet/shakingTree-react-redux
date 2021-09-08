import React, { Component } from "react";

import { connect } from "react-redux";

import classes from "./Tree.module.scss";

import Leaves from "./Leaves/Leaves";

class Tree extends Component {
  state = {
    shake: false,
  };

  shakeTreeEnableHandler = () => {
    this.setState({
      shake: true,
    });
  };

  shakeTreeDisableHandler = () => {
    this.setState({
      shake: false,
    });
  };

  render() {
    return (
      <div
        onAnimationEnd={() => {
          this.shakeTreeDisableHandler();
          this.props.clicked();
        }}
        appleid={this.props.appleid}
        onClick={this.shakeTreeEnableHandler}
        className={
          this.state.shake && this.props.treeArray.length > 0
            ? `${classes.Tree} ${classes.active}`
            : classes.Tree
        }
      >
        <Leaves />
        <div className={classes.Trunk}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    treeArray: state.treeArray,
  };
};

export default connect(mapStateToProps)(Tree);
