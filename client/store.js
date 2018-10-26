import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import databaseReducers from './reducers/databaseReducer';

const store = createStore(
  databaseReducers,
  composeWithDevTools()
);

export default store;