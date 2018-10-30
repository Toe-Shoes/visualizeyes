// reducer for our database
import * as types from '../constants/actionTypes';

const initalState = {
  url: '',
  connection: false,
  data : [],
  currentCollection : '',
};

const databaseReducer = (state = initalState, action) => {

  switch (action.type) {

    case types.actionTypes.SET_URL:{
      console.log(action.type);
      let url = action.payload;
      return {
        ...state,
        data : JSON.parse(JSON.stringify(state.data)),
        url,
      };
    }

    case types.actionTypes.CHANGE_CONNECTION: {
      console.log(action.type);
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
      console.log(action.type);
      let data = action.payload;
      return {
        ...state,
        data,
      }
    }

    case types.actionTypes.SET_CURRENT_COLLECTION: {
      console.log(action.type);
      let currentCollection = action.payload;
      return {
        ...state,
        currentCollection,
      }
    }

    default:
      return state;
  }
};

export default databaseReducer;
