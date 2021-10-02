import { FETCH_ERROR, FETCH_START, FETCH_SUCCESS } from '../../@jumbo/constants/ActionTypes';

export const fetchSuccess = (msg) => {
 
  return dispatch => {
    dispatch({
      type: FETCH_SUCCESS,
      payload: msg,

    });
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
