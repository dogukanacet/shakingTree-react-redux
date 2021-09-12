import * as actionType from "./actionTypes";

const initialState = {
  shakeTree: false,
  treeArray: [],
  appleAmountInBasket: 0,
  appleCount: 0,
};

const reducer = (state = initialState, action) => {
  let getAvailableAppleCount = (treeArray) => {
    if (treeArray.length < action.fallingAppleCount) {
      action.fallingAppleCount = treeArray.length;
    }
    state.appleCount = action.fallingAppleCount;
  };

  let dropApple = (treeArray) => {
    getAvailableAppleCount(treeArray);
    let newArray = treeArray;
    for (let i = 0; i < state.appleCount; i++) {
      newArray = newArray.filter((_, index) => index !== 0);
    }

    return newArray;
  };

  switch (action.type) {
    case actionType.SET_APPLE_AMOUNT:
      let treeArray = new Array(action.appleAmount).fill(0);
      return {
        ...state,
        treeArray: treeArray,
      };

    case actionType.SHAKE_TREE:
      return {
        ...state,
        shakeTree: true,
      };

    case actionType.DROP_APPLE:
      let newTreeArray = dropApple(state.treeArray);
      return {
        ...state,
        treeArray: newTreeArray,
      };

    case actionType.ADD_APPLE_TO_BASKET:
      return {
        ...state,
        appleAmountInBasket: (state.appleAmountInBasket += state.appleCount),
        shakeTree: false,
      };

    default:
      return state;
  }
};

export default reducer;
