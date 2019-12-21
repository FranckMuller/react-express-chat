import { State } from '../redux/rootReducer';

export const selectIsAuthenticated = (state: State): boolean => {
  return state.auth.hasOwnProperty('authToken');
};
