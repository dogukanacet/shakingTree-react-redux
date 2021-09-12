import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "./redux/actions";

import classes from "./App.module.scss";

// Components
import Grass from "./components/Grass/Grass";
import Tree from "./components/Tree/Tree";
import Basket from "./components/Basket/Basket";

class App extends Component {
  componentDidMount() {
    this.props.onInit(this.getRandomInt(10, 20));
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  shakeTree = (appleAmount) => {
    this.props.onShake(appleAmount);
    setTimeout(() => {
      this.props.onFall();
    }, 2000);
  };

  render() {
    return (
      <div className={classes.App}>
        <Tree clicked={() => this.shakeTree(this.getRandomInt(1, 3))} />
        <Basket />
        <Grass />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    treeArray: state.treeArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: (appleAmount) => dispatch(actions.setAppleAmount(appleAmount)),
    onShake: (appleAmount) => dispatch(actions.dropApple(appleAmount)),
    onFall: (payload) => dispatch(actions.addAppleToBasket(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
