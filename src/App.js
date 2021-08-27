import React, { Component } from "react";

import classes from "./App.module.scss";

// Components
import Grass from "./components/Grass/Grass";
import Tree from "./components/Tree/Tree";
import Apple from "./components/Apple/Apple";

export default class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Tree />
        <Grass />
      </div>
    );
  }
}
