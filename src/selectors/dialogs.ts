import { State } from '../redux/rootReducer';

const selectDialogs = (state: State): Array<any> => state.dialogs.items;

export { selectDialogs };
