import React from "react";

import { connect } from "react-redux";

import classes from "./Basket.module.scss";
import Apple from "../Apple/Apple";

const basket = (props) => {
  let apples = [];
  for (var i = 0; i < props.appleAmountInBasket; i++) {
    apples.push(<Apple inBasket key={i} />);
  }

  return <div className={classes.Basket}>{apples}</div>;
};

const mapStateToProps = (state) => {
  return {
    appleAmountInBasket: state.appleAmountInBasket,
  };
};

export default connect(mapStateToProps)(basket);
