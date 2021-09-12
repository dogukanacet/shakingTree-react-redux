import React, { Component } from "react";

import { connect } from "react-redux";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import classes from "./Tree.module.scss";

import Leaves from "./Leaves/Leaves";
import Apple from "../Apple/Apple";

class Tree extends Component {
  // state = {
  //   shake: false,
  // };

  // shakeTreeEnableHandler = () => {
  //   this.setState({
  //     shake: true,
  //   });

  //   setTimeout(() => {
  //     this.props.clicked();
  //     setTimeout(() => {
  //       this.shakeTreeDisableHandler();
  //     }, 2000);
  //   }, 3000);
  // };

  // shakeTreeDisableHandler = () => {
  //   this.setState({
  //     shake: false,
  //   });
  // };

  render() {
    const apples = this.props.treeArray.map((apple, index) => {
      return (
        <CSSTransition
          classNames={{ exitActive: classes.active }}
          timeout={2000}
          key={index}
        >
          <Apple></Apple>
        </CSSTransition>
      );
    });
    return (
      <div
        className={
          this.props.shakeTree
            ? `${classes.Tree} ${classes.active}`
            : classes.Tree
        }
      >
        <TransitionGroup className={classes.Apples}>{apples}</TransitionGroup>
        <Leaves />
        <div className={classes.Trunk}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shakeTree: state.shakeTree,
    treeArray: state.treeArray,
  };
};

export default connect(mapStateToProps)(Tree);
