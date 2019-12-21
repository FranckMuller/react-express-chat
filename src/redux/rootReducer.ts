import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';
import { dialogsReducer, DialogsState } from './dialogs/reducer';
import { AlertState, alertReducer } from './alert/reducer';
import { AuthState, AuthReducer } from './auth/reducer';

export interface State {
  dialogs: DialogsState;
  router: RouterState;
  alert: AlertState;
  auth: AuthState;
}

const rootReducer = (history: History) =>
  combineReducers({
    dialogs: dialogsReducer,
    alert: alertReducer,
    auth: AuthReducer,
    router: connectRouter(history)
  });

export default rootReducer;
