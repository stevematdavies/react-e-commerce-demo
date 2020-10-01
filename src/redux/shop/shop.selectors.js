import {createSelector} from "reselect";
import memoize from 'lodash/memoize';

const selectShop = ({shop}) => shop

export const selectCollections = createSelector(
  [selectShop],
  ({collections}) => collections
)

export const selectCollection = memoize(collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>
      collections
        ? collections[collectionUrlParam]
        : null
))

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections =>
    collections
      ? Object.keys(collections).map(key => collections[key])
      : []
)
