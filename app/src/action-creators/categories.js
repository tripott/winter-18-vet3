import fetch from 'isomorphic-fetch'
import { SET_CATEGORIES, CURRENT_CAT } from '../constants'
const url = 'http://localhost:5000'

/*
getResources()
- use fetch to make a GET to /resources
- take array of resource documents and turn them into json
- dispatch an action containing the resources as a payload:
	dispatch({type: SET_RESOURCES, payload: resources})
*/
export const getCategories = async (dispatch, getState) => {
  const categories = await fetch(`${url}/categories`).then(res => res.json())
  dispatch({ type: SET_CATEGORIES, payload: categories })
}

export const getCategory = id => async (dispatch, getState) => {
  const category = await fetch(`${url}/categories/${id}`).then(res =>
    res.json()
  )
  dispatch({ type: CURRENT_CAT, payload: category })
}
