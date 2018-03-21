import {
  SET_CATEGORIES,
  CURRENT_CAT,
  CHANGE_CURRENT_CATEGORY,
  RESET_ADD_CAT_FORM,
  TOGGLE_DELETE,
  EDIT_CURRENT_CATEGORY
} from '../constants'
import { merge, not } from 'ramda'

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
    case TOGGLE_DELETE:
      return merge(state, { toggleDelete: not(state.toggleDelete) })
    case EDIT_CURRENT_CATEGORY:
      return merge(state, action.payload)
    default:
      return state
  }
}

export const addCategoryForm = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_CATEGORY:
      return merge(state, action.payload)
    case RESET_ADD_CAT_FORM:
      return {}
    default:
      return state
  }
}
