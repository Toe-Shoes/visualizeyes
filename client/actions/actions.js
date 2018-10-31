// Our action creators

import * as types from '../constants/actionTypes';

export const getDb = (url) => ({
  type: types.actionTypes.GET_DB,
  payload: url
});

export const setUrl = (url) => ({
  type: types.actionTypes.SET_URL,
  payload: url
});

export const changeConnection = () => ({
  type: types.actionTypes.CHANGE_CONNECTION
});

export const setDBData = (data) => ({
  type: types.actionTypes.SET_DB_DATA,
  payload: data,
});

export const setCurrentCollection = (collection) => ({
  type: types.actionTypes.SET_CURRENT_COLLECTION,
  payload: collection,
})

export const setChangeMadeTrue = () => ({
  type: types.actionTypes.SET_CHANGE_MADE_TRUE,
})
export const setChangeMadeFalse = () => ({
  type: types.actionTypes.SET_CHANGE_MADE_FALSE,
})






