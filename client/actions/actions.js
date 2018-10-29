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
})

