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
    collections => collections[collectionUrlParam])
)

export const selectCollectionForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
)
