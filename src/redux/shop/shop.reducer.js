import SHOP_DATA from "./shop.data";
import {actionTypes} from "../action.types";

const INITIAL_STATE = {
  collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.shop.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}

export default shopReducer
