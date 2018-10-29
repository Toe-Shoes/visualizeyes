// reducer for our database
import * as types from '../constants/actionTypes';

const initalState = {
  url: '',
  connection: false,
  data : {},
};

const databaseReducer = (state = initalState, action) => {

  switch (action.type) {

    case types.actionTypes.SET_URL:{
      let url = action.payload;
      return {
        ...state,
        data : JSON.parse(JSON.stringify(state.data)),
        url,
      };
    }

    case types.actionTypes.CHANGE_CONNECTION: {
      let connection;
      if (!state.connection) {
          connection = true;
      } else {
          connection = state.connection;
      }
      return {
        ...state,
        data : JSON.parse(JSON.stringify(state.data)),
        connection,
      }
    }

    case types.actionTypes.SET_DB_DATA: {
      let data = action.payload;
      return {
        ...state,
        data,
      }
    }

    default:
      return state;
  }
};

export default databaseReducer;
