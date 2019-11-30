import { combineReducers } from 'redux';
import dialogReducer from './dialog';

const rootReducer = combineReducers({
  dialog: dialogReducer
});

export default rootReducer;
