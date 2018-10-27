import {combineReducers} from 'redux';
import datbaseReducer from './databaseReducer';

const reducers = combineReducers({
  database: databaseReducer,
});

export default reducers;
