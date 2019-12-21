import { TypedAction } from '../types';

export const CLOSE_ALERT = 'CLOSE_ALERT';
export const UPDATE_ALERT_STATE = 'UPDATE_ALERT_STATE';
export const CLEAR_ALERT_STATE = 'CLEAR_ALERT_STATE';

type AlertAction =
  | TypedAction<typeof UPDATE_ALERT_STATE, IAlert>
  | TypedAction<typeof CLOSE_ALERT, number>
  | TypedAction<typeof CLEAR_ALERT_STATE, undefined>;

export interface IAlert {
  id: number;
  type: string;
  message: string;
}

export type AlertState = {
  items: Array<IAlert> | [];
};

const initialState: AlertState = {
  items: []
};

export const alertReducer = (state: AlertState = initialState, { type, payload }: AlertAction): AlertState => {
  switch (type) {
    case UPDATE_ALERT_STATE:
      return {
        ...state,
        items: updateItems(state.items, payload as IAlert)
      };

    case CLOSE_ALERT:
      const idx = state.items.findIndex(el => el.id === payload);
      return {
        ...state,
        items: [...state.items.slice(0, idx), ...state.items.slice(idx + 1)]
      };

    case CLEAR_ALERT_STATE:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

const updateItems = (items: Array<IAlert>, newItem: IAlert): Array<IAlert> => {
  if (items.length > 4) {
    return [...items.slice(1), newItem];
  } else {
    return [...items, newItem];
  }
};
