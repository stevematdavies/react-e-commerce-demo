import {actionTypes} from "../action.types";


export const updateCollections = collectionsMap => ({
  type: actionTypes.shop.UPDATE_COLLECTIONS,
  payload: collectionsMap
})
