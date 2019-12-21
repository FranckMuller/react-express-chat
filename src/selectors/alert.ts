import { State } from '../redux/rootReducer';

export const selectAlertItems = (state: State) => {
  return state.alert.items;
};
