export const SET_DIALOGS = 'SET_DIALOGS';

const initialState = {
  items: []
};

const dialogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DIALOGS:
      return {
        ...state,
        items: payload
      };
      break;

    default:
      return state;
  }
};

export default dialogReducer;
