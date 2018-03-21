import { createStore, combineReducers, applyMiddleware } from 'redux'
import { searchCriteria } from './reducers/search'
import { resource, resources } from './reducers/resources'
import { categories, category, addCategoryForm } from './reducers/categories'

import appData from './reducers/app-data'
import drawer from './reducers/drawer'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    searchCriteria,
    resource,
    resources,
    appData,
    category,
    categories,
    drawer,
    currentResource,
    addCategoryForm
  }),

  applyMiddleware(thunk)
)

export default store
