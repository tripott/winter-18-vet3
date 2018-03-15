import { createStore, combineReducers, applyMiddleware } from 'redux'

import { resources } from './reducers/resources'
import { categories } from './reducers/categories'
import appData from './reducers/app-data'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ resources, appData, categories }),
  applyMiddleware(thunk)
)

export default store
