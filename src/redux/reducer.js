import * as actionType from "./actionTypes";

const initialState = {
  appleArr: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_APPLE_AMOUNT:
      const arr = new Array(action.appleAmount).fill(0);
      return {
        appleArr: arr,
      };

    default:
      return state;
  }
};

export default reducer;
