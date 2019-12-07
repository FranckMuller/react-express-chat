import { UPDATE_DIALOGS } from '../reducers/dialogs';
import { getAllDialogs } from '../../api';

const updateDialogs = dialogs => ({
  type: UPDATE_DIALOGS,
  payload: dialogs
});

const fetchDialogs = () => async dispatch => {
  const dialogs = await getAllDialogs();
  dispatch(updateDialogs(dialogs));
};

export { fetchDialogs };
