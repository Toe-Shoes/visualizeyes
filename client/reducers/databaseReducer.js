// reducer for our database
import * as types from '../constants/actionTypes';

const initalState = {
  url: '',
  database: {},
  connection: false,
};

const databaseReducer = (state = initalState, action) => {

  switch (action.type) {

    // case types.GET_DB:{
    //   fetch(`{state.url}`)
    // },

    case types.actionTypes.SET_URL:{
      let url = action.payload;
      return {
        ...state,
        url,
      };
    }



    default:
      return state;
  }
};

export default databaseReducer;
