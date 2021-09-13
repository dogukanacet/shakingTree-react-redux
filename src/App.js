import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "./redux/actions";

import classes from "./App.module.scss";

// Components
import Grass from "./components/Grass/Grass";
import Tree from "./components/Tree/Tree";
import Basket from "./components/Basket/Basket";
import Button from "./components/Button/Button";

class App extends Component {
  MIN_INITIAL_APPLE_COUNT = 10;
  MAX_INITIAL_APPLE_COUNT = 20;

  MIN_FALLING_APPLE_COUNT = 2;
  MAX_FALLING_APPLE_COUNT = 4;

  componentDidMount() {
    // Defines the initial number of apples on tree between two parameters on mount.
    this.props.onInit(
      this.getRandomNumber(
        this.MIN_INITIAL_APPLE_COUNT,
        this.MAX_INITIAL_APPLE_COUNT
      )
    );
  }

  // Returns random number between given parameters.
  getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Dispatches all three actions needed for apples to drop from tree.
  shakeTree = (fallingAppleCount) => {
    if (!this.props.shakeTree && this.props.applesOnTree.length > 0) {
      this.props.onClick();
      setTimeout(() => {
        this.props.onShake(fallingAppleCount);
        setTimeout(() => {
          this.props.onFall();
        }, 2000);
      }, 3000); // Timeout is used in order to call the function after tree's animation ended.
    }
  };

  render() {
    let fallingAppleCount = this.getRandomNumber(
      this.MIN_FALLING_APPLE_COUNT,
      this.MAX_FALLING_APPLE_COUNT
    );
    return (
      <div className={classes.App}>
        <Button clicked={() => this.shakeTree(fallingAppleCount)} />
        <Tree />
        <Basket />
        <Grass />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shakeTree: state.shakeTree,
    applesOnTree: state.applesOnTree,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: (initialAppleCount) =>
      dispatch(actions.setAppleCountOnTree(initialAppleCount)),
    onClick: () => dispatch(actions.shakeTree()),
    onShake: (appleCount) => dispatch(actions.dropAppleFromTree(appleCount)),
    onFall: () => dispatch(actions.addAppleToBasket()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
