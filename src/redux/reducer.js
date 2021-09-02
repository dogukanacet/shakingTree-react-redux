import * as actionType from "./actionTypes";

const initialState = {
  treeArray: [],
  appleCount: 0,
};

const reducer = (state = initialState, action) => {
  let dropApple = (treeArray, basketAppleCount) => {
    if (treeArray.length <= 0) {
      return [treeArray, basketAppleCount];
    }

    let newArray = state.treeArray.filter((item, index) => {
      return index !== 0;
    });
    basketAppleCount += 1;

    return [newArray, basketAppleCount];
  };

  switch (action.type) {
    case actionType.SET_APPLE_AMOUNT:
      const treeArr = new Array(action.appleAmount).fill(0);
      return {
        ...state,
        treeArray: treeArr,
      };

    case actionType.DROP_APPLE:
      let [newTreeArray, newAppleCount] = dropApple(
        state.treeArray,
        state.appleCount
      );
      return {
        ...state,
        treeArray: newTreeArray,
        appleCount: newAppleCount,
      };

    default:
      return state;
  }
};

export default reducer;
