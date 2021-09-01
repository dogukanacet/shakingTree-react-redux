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
    this.props.onInit(this.getRandomInt(5, 13));
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  render() {
    return (
      <div className={classes.App}>
        <Tree />
        <Basket />
        <Grass />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInit: (value) => dispatch(actions.setAppleAmount(value)),
  };
};

export default connect(null, mapDispatchToProps)(App);
