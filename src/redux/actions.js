import * as actionType from "./actionTypes";

export const setAppleAmount = (value) => {
  return {
    type: actionType.SET_APPLE_AMOUNT,
    appleAmount: value,
  };
};

export const dropApple = (value) => {
  return {
    type: actionType.DROP_APPLE,
    appleAmount: value,
  };
};

export const addAppleToBasket = (value) => {
  return {
    type: actionType.ADD_APPLE_TO_BASKET,
    appleAmount: value,
  };
};
