import * as actionType from "./actionTypes";

export const setAppleAmount = (payload) => {
  return {
    type: actionType.SET_APPLE_AMOUNT,
    appleAmount: payload,
  };
};

export const dropApples = (id) => {
  return {
    type: actionType.DROP_APPLE,
    appleId: id,
  };
};
