import {createSelector} from "reselect";

const selectShop = ({collections}) => collections

export const selectCollections = createSelector(
  [selectShop],
  ({collections}) => collections
)
