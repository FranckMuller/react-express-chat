import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { dialogsReducer, DialogsState } from './dialogs';

export interface State {
  dialogs: DialogsState;
  router: RouterState;
}

const rootReducer = (history: History) =>
  combineReducers({
    dialogs: dialogsReducer,
    router: connectRouter(history)
  });

export default rootReducer;
