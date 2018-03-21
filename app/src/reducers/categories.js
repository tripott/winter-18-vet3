<<<<<<< HEAD
import { SET_CATEGORIES, CURRENT_CAT, ADD_CATEGORY } from '../constants'
=======
import {
  SET_CATEGORIES,
  CURRENT_CAT,
  CHANGE_CURRENT_CATEGORY,
  RESET_ADD_CAT_FORM,
  TOGGLE_DELETE
} from '../constants'
import { merge, not } from 'ramda'
>>>>>>> 6a4419f... delete workin kinda

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
    default:
      return state
  }
}

export const addCategoryForm = (state = {}, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return action.payload
    default:
      return state
  }
}
