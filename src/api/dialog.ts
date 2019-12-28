import axios from '../core';

export const getAllDialogs = async () => {
  const result = await axios.get('/dialogs');
  return result.data;
};
