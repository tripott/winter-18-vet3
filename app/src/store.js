import { createStore, combineReducers, applyMiddleware } from 'redux'

import { resource, resources, currentResource } from './reducers/resources'
import { categories, category, addCategoryForm } from './reducers/categories'

import appData from './reducers/app-data'
import drawer from './reducers/drawer'

import thunk from 'redux-thunk'
import formValidationData from './reducers/form-validation'

const store = createStore(
  combineReducers({
    resource,
    resources,
    appData,
    category,
    categories,
    drawer,
    currentResource,
    addCategoryForm,
    formValidationData
  }),

  applyMiddleware(thunk)
)

export default store
