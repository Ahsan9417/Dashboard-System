import axios from 'axios';

export default axios.create({
  // baseURL: `http://g-axon.work/jwtauth/api/`, //YOUR_API_URL HERE
  baseURL: process.env.REACT_APP_URL + 'country', //YOUR_API_URL HERE
  headers: {
    'Content-Type': 'application/json',
  },
});