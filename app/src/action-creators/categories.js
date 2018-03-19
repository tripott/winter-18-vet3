import fetch from 'isomorphic-fetch'
import {
  SET_CATEGORIES,
  CURRENT_CAT,
  CHANGE_CURRENT_CATEGORY,
  RESET_ADD_CAT_FORM,
  ADD_CATEGORY
} from '../constants'
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
  dispatch({ type: CURRENT_CAT, payload: {} })
  const category = await fetch(`${url}/categories/${id}`).then(res =>
    res.json()
  )
  dispatch({ type: CURRENT_CAT, payload: category })
}

export const addCategory = (category, history) => async (
  dispatch,
  getState
) => {
  const method = 'POST'
  const headers = { 'Content-Type': 'application/json' }
  const body = JSON.stringify(category)
  const result = await fetch(`${url}/categories`)
    .then(httpResponse => httpResponse.json())
    .catch(err => {
      console.log('fetch err', err)
    })
  dispatch(getCategories)
  dispatch({ type: RESET_ADD_CAT_FORM })
  history.push('/categories')
}

export const changeCategory = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHANGE_CURRENT_CATEGORY, payload: { [field]: value } })
}
