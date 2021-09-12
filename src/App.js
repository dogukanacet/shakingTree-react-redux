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
  componentDidMount() {
    this.props.onInit(this.getRandomInt(10, 20));
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  shakeTree = (appleAmount) => {
    if (!this.props.shakeTree && this.props.treeArray.length > 0) {
      this.props.onClick();
      setTimeout(() => {
        this.props.onShake(appleAmount);
        setTimeout(() => {
          this.props.onFall();
        }, 2000);
      }, 3000);
    }
  };

  render() {
    return (
      <div className={classes.App}>
        <Button clicked={() => this.shakeTree(this.getRandomInt(1, 3))} />
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
    treeArray: state.treeArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: (appleAmount) => dispatch(actions.setAppleAmount(appleAmount)),
    onClick: () => dispatch(actions.shakeTree()),
    onShake: (appleAmount) => dispatch(actions.dropApple(appleAmount)),
    onFall: (payload) => dispatch(actions.addAppleToBasket(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
