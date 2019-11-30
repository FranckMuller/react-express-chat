import axios from '../core';

const getAllDialogs = async () => {
  const result = await axios.get('/dialogs');
  return result.data;
};

export { getAllDialogs };
