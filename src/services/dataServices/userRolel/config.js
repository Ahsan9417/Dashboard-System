import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_URL + 'admin-menu-master', 
  headers: {
    'Content-Type': 'application/json',
  },
});