import * as actionType from "./actionTypes";

const initialState = {
  shakeTree: false,
  applesOnTree: [],
  appleAmountInBasket: 0,
  fallingAppleCount: 0,
};

const reducer = (state = initialState, action) => {
  {
    /* 
    Validates falling apple count on tree.
    Sets falling apple count to apple count on the tree if given number is greater than apple count on tree.
    */
  }
  let validateFallingAppleCount = (appleCountOnTree) => {
    let fallingAppleCount = action.fallingAppleCount;
    if (appleCountOnTree < fallingAppleCount) {
      fallingAppleCount = appleCountOnTree;
    }
    state.fallingAppleCount = fallingAppleCount;

    return fallingAppleCount;
  };

  // Remove elements from passed array by the number of "fallingAppleCount" variable in state.
  let dropApple = (applesOnTree) => {
    for (let i = 0; i < state.fallingAppleCount; i++) {
      applesOnTree = applesOnTree.filter((_, index) => index !== 0);
    }

    return applesOnTree;
  };

  // Switch statement for handling all dispatched actions.
  switch (action.type) {
    case actionType.SET_APPLE_COUNT_ON_TREE:
      let applesOnTree = new Array(action.initialAppleCount).fill(0); // Initiates  apple count on the tree.

      return {
        ...state,
        applesOnTree: applesOnTree,
      };

    case actionType.SHAKE_TREE:
      return {
        ...state,
        shakeTree: true,
      };

    case actionType.DROP_APPLE_FROM_TREE:
      let newFallingAppleCount = validateFallingAppleCount(
        state.applesOnTree.length
      );
      let newApplesOnTree = dropApple([...state.applesOnTree]);

      return {
        ...state,
        fallingAppleCount: newFallingAppleCount,
        applesOnTree: newApplesOnTree,
      };

    case actionType.ADD_APPLE_TO_BASKET:
      let appleAmountInBasket =
        state.appleAmountInBasket + state.fallingAppleCount; // Increases apple count in the basket by fallen apple count.

      return {
        ...state,
        appleAmountInBasket: appleAmountInBasket,
        shakeTree: false,
      };

    default:
      return state;
  }
};

export default reducer;
