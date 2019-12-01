export const UPDATE_DIALOGS = 'UPDATE_DIALOGS';

const initialState = {
  items: []
};

const dialogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_DIALOGS:
      return {
        ...state,
        items: payload
      };

    default:
      return state;
  }
};

export default dialogReducer;
