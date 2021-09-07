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
    this.props.onInit(this.getRandomInt(6, 13));
  }

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <div className={classes.App}>
        <Tree clicked={() => this.props.onClick(this.getRandomInt(1, 3))} />
        <Basket />
        <Grass />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: (value) => dispatch(actions.setAppleAmount(value)),
    onClick: (value) => {
      dispatch(actions.addAppleToBasket(value)),
        dispatch(actions.dropApple(value));
    },
  };
};

export default connect(null, mapDispatchToProps)(App);
