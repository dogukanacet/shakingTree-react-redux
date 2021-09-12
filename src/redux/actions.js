import * as actionType from "./actionTypes";

export const setAppleAmount = (appleAmount) => {
  return {
    type: actionType.SET_APPLE_AMOUNT,
    appleAmount: appleAmount,
  };
};

export const shakeTree = () => {
  return {
    type: actionType.SHAKE_TREE,
  };
};

export const dropApple = (fallingAppleCount) => {
  return {
    type: actionType.DROP_APPLE,
    fallingAppleCount: fallingAppleCount,
  };
};

export const addAppleToBasket = () => {
  return {
    type: actionType.ADD_APPLE_TO_BASKET,
  };
};
