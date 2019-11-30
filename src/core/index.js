import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_DB_URL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default axios;
