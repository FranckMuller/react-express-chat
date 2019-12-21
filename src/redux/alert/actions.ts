import { CLOSE_ALERT, CLEAR_ALERT_STATE, UPDATE_ALERT_STATE } from './reducer';

export const closeAlert = (id: number) => ({
  type: CLOSE_ALERT,
  payload: id
});

export const clearAlertState = () => ({
  type: CLEAR_ALERT_STATE,
  payload: undefined
});

export const updateAlertState = (type: string, message: string) => {
  const id = new Date().getTime();
  return {
    type: UPDATE_ALERT_STATE,
    payload: {
      type,
      message,
      id
    }
  };
};
