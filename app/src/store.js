import { createStore, combineReducers, applyMiddleware } from 'redux'

import { resources } from './reducers/resources'
import { categories, category } from './reducers/categories'
import appData from './reducers/app-data'
import drawer from './reducers/drawer'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({ resources, appData, categories, drawer, category }),
  applyMiddleware(thunk)
)

export default store
