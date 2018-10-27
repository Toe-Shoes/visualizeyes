// reducer for our database
import * as types from '../constants/actionTypes';

const initalState = {
  url: '',
  database: {},
  connection: false,
};

const databaseReducer = (state = initalState, action) => {

  switch (action.type) {

    case types.actionTypes.SET_URL:{
      let url = action.payload;
      return {
        ...state,
        url,
      };
    }

    case types.actionTypes.CHANGE_CONNECTION: {
      let connection = !state.connection;
      return {
        ...state,
        connection,
      }
    }

    default:
      return state;
  }
};

export default databaseReducer;
