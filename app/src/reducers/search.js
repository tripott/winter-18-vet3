import { CHANGE_SEARCH_CRITERIA } from '../constants'

// {type: CHANGE_SEARCH_CRITERIA, payload: "Fam"}
const searchCriteria = (state = '', action) => {
  switch (action.type) {
    case CHANGE_SEARCH_CRITERIA:
      return action.payload
    default:
      return state
  }
}

export default searchCriteria
