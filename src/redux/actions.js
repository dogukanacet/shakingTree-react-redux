import * as actionType from "./actionTypes";

export const setAppleAmount = (payload) => {
  return {
    type: actionType.SET_APPLE_AMOUNT,
    appleAmount: payload,
  };
};
