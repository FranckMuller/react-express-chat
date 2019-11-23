import axios from '../core';

const getAllDialogs = () => {
  axios.get('/dialogs').then(res => {
    console.log(res);
  });
};

export { getAllDialogs };
