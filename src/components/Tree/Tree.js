import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../redux/actions";

import classes from "./Tree.module.scss";

import Leaves from "./Leaves/Leaves";

class Tree extends Component {
  componentDidMount() {
    this.props.onInit(this.props.appleCount);
  }
  render() {
    return (
      <div className={classes.Tree}>
        <Leaves appleArr={this.props.appleArr} />
        <div className={classes.Trunk}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appleArr: state.appleArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: (value) => dispatch(actions.setAppleAmount(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tree);
