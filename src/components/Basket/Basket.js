import React from "react";

import { connect } from "react-redux";

import classes from "./Basket.module.scss";
import Apple from "../Apple/Apple";

const basket = (props) => {
  const apples = props.appleArr.map((_, index) => {
    return <Apple inBasket key={index} />;
  });
  return <div className={classes.Basket}>{apples}</div>;
};

const mapStateToProps = (state) => {
  return {
    appleArr: state.appleArr,
  };
};

export default connect(mapStateToProps)(basket);
