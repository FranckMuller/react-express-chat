import { TypedAction } from '../types';

export const UPDATE_DIALOGS = 'UPDATE_DIALOGS';

export type AuthActions = TypedAction<typeof UPDATE_DIALOGS, any[]>;

export type DialogsState = {
  items: any[];
};

const initialState = {
  items: []
};

export const dialogsReducer = (state: DialogsState = initialState, { type, payload }: AuthActions): DialogsState => {
  switch (type) {
    case UPDATE_DIALOGS:
      return {
        ...state,
        items: [...state.items, payload]
      };

    default:
      return state;
  }
};
