import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from '../../@jumbo/constants/ActionTypes';

export const fetchSuccess = () => {
  console.log('fetchSuccess');
  return dispatch => {
    dispatch({
      type: FETCH_SUCCESS,
    });
  };
};
export const fetchSuccess1 = () => {
  console.log('fetchSuccess1');
  return {
    type: FETCH_SUCCESS,
  };
};
export const fetchError = error => {
  return dispatch => {
    dispatch({
      type: FETCH_ERROR,
      payload: error,
    });
  };
};

export const fetchStart = () => {
  return dispatch => {
    dispatch({
      type: FETCH_START,
    });
  };
};
