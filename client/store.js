import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(
  composeWithDevTools ()
);

export default store;