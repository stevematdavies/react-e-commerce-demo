import {actionTypes} from "../action.types";

export const setCurrentUser = user => ({
  type: actionTypes.user.SET_CURRENT_USER,
  payload: user
})
