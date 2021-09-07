import * as actionType from "./actionTypes";

const initialState = {
  treeArray: [],
  appleAmountInBasket: 0,
};

const reducer = (state = initialState, action) => {
  let dropApple = (treeArray) => {
    let newArray = treeArray.filter((item, index) => {
      if (action.appleAmount === 3) {
        return index !== 0 && index !== 1 && index !== 2;
      }
      if (action.appleAmount === 2) {
        return index !== 0 && index !== 1;
      }
      if (action.appleAmount === 1) {
        return index !== 0;
      }
    });

    return newArray;
  };

  let addAppleToBasket = (treeArray, appleAmountInBasket) => {
    if (treeArray.length < 1) {
      return appleAmountInBasket;
    }
    if (treeArray.length < 2) {
      return (appleAmountInBasket += 1);
    }
    if (treeArray.length === 2 && action.appleAmount > 1) {
      return (appleAmountInBasket += 2);
    }

    return (appleAmountInBasket += action.appleAmount);
  };

  switch (action.type) {
    case actionType.SET_APPLE_AMOUNT:
      let treeArray = new Array(action.appleAmount).fill(0);
      return {
        ...state,
        treeArray: treeArray,
      };

    case actionType.DROP_APPLE:
      let newTreeArray = dropApple(state.treeArray);
      return {
        ...state,
        treeArray: newTreeArray,
      };

    case actionType.ADD_APPLE_TO_BASKET:
      let newAppleAmountInBasket = addAppleToBasket(
        state.treeArray,
        state.appleAmountInBasket
      );
      return {
        ...state,
        appleAmountInBasket: newAppleAmountInBasket,
      };

    default:
      return state;
  }
};

export default reducer;
