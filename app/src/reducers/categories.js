import { SET_CATEGORIES, CURRENT_CAT } from '../constants'

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
