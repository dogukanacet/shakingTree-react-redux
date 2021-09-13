import * as actionType from "./actionTypes";

// Sets initial apple count on tree.
export const setAppleCountOnTree = (initialAppleCount) => {
  initialAppleCount = initialAppleCount > 20 ? 20 : initialAppleCount; // Max apple count cannot be more than 20.
  return {
    type: actionType.SET_APPLE_COUNT_ON_TREE,
    initialAppleCount: initialAppleCount,
  };
};

export const shakeTree = () => {
  return {
    type: actionType.SHAKE_TREE,
  };
};

export const dropAppleFromTree = (fallingAppleCount) => {
  return {
    type: actionType.DROP_APPLE_FROM_TREE,
    fallingAppleCount: fallingAppleCount,
  };
};

export const addAppleToBasket = () => {
  return {
    type: actionType.ADD_APPLE_TO_BASKET,
  };
};
