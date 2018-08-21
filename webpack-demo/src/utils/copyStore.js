import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'
// import { loadingBarMiddleware } from 'react-redux-loading-bar'
// import logger from 'redux-logger'
import withRedux from 'next-redux-wrapper'
import { rootReducer } from 'fast-redux'
import { combineReducers } from 'redux'

export const initStore = (initialState = {}) => {
  const middleware = []
  const storeArgs = [rootReducer, initialState]
  if(process.env.NODE_ENV !== 'production'){
    storeArgs.push(composeWithDevTools(applyMiddleware(...middleware)))
  } else {
    storeArgs.push(applyMiddleware(...middleware))
  }
  return createStore(...storeArgs)
}

export const reduxPage = (comp) => withRedux(initStore)(comp)
