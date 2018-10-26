// reducer for our database
import * as types from '../constants/actionTypes';

const initalState = {
  url: '',
  database: []
};

const databaseReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.actionTypes.GET_DB : {
      //This is where our logic to get our DB
      console.log('We"re getting our database');
    }
  }
}

export default databaseReducer;