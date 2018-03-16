import { createStore, combineReducers, applyMiddleware } from 'redux'

import { resource, resources } from './reducers/resources'
import { categories, category } from './reducers/categories'

import appData from './reducers/app-data'
import drawer from './reducers/drawer'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    resource,
    resources,
    appData,
    category,
    categories,
    drawer
  }),

  applyMiddleware(thunk)
)

export default store
