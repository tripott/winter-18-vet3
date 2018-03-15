import { createStore, combineReducers, applyMiddleware } from 'redux'

import { resources } from './reducers/resources'
import appData from './reducers/app-data'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ resources, appData }),
  applyMiddleware(thunk)
)

export default store
