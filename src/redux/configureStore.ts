import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './rootReducer';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();
const authState = window.localStorage.getItem('authState')
  ? JSON.parse(window.localStorage.getItem('authState') as string)
  : {};

export default function configureStore() {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [thunk, routerMiddleware(history)];
  const store = createStore(
    createRootReducer(history),
    { auth: authState },
    composeEnhancer(applyMiddleware(...middlewares))
  );

  return store;
}
