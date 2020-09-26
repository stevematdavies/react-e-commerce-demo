import {createSelector} from "reselect";
import memoize from 'lodash/memoize';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
}

const selectShop = ({shop}) => shop

export const selectCollections = createSelector(
  [selectShop],
  ({collections}) => collections
)

export const selectCollection = memoize(collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections
      .find(c => c.id === COLLECTION_ID_MAP[collectionUrlParam])
  ))
