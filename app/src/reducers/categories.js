import {
  SET_CATEGORIES,
  CURRENT_CAT,
  ADD_CATEGORY,
  RESET_ADD_CAT_FORM
} from '../constants'
import { merge } from 'ramda'
export const categories = (state = [], action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload
    default:
      return state
  }
}

export const category = (state = {}, action) => {
  switch (action.type) {
    case CURRENT_CAT:
      return action.payload
    default:
      return state
  }
}

export const addCategoryForm = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return merge(state, action.payload)
    case RESET_ADD_CAT_FORM:
      return {}
    default:
      return state
  }
}
