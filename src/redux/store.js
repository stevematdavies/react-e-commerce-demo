import {createStore, applyMiddleware} from "redux";
import { persistStore } from "redux-persist";
import logger from 'redux-logger'
import rootReducer from './root-reducer'

const middlewares = process.env.NODE_ENV === 'development' ? [logger] : []

export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistedStore = persistStore(store)

export default {store, persistedStore}
