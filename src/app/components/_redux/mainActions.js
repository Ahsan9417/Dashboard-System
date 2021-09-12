import * as requestFromServer from "./mainCrud";
import { mainSlice } from "./mainSlice";

const { actions } = mainSlice;

export const getUserDetails = (email, req_header) => dispatch => {
  return requestFromServer
    .getMember(email, req_header)
    .then(response => {
      if(response.data.dataException.err_code === 200){
        dispatch(actions.userDetailsFetched(response.data.data));
        return response.data.data;
      } else {
        return null;
      }
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't find member details";
    });
};

export const updateUserDetails = (body, req_header) => dispatch => {
  dispatch(actions.settingLoader(true));
  return requestFromServer
    .updateMember(body, req_header)
    .then(response => {
      if (response.data.dataException.err_code === 200) {
        dispatch(actions.settingLoader(false));
        dispatch(actions.settingUpdateStatus({ status: 'success', msg: response.data.dataException.err_msg }));
      } else {
        dispatch(actions.settingLoader(false));
        dispatch(actions.settingUpdateStatus({ status: 'error', msg: response.data.dataException.err_msg }));
      }
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't update member details";
    });
};

export const updateUserPassword = (body, req_header) => dispatch => {
  dispatch(actions.passwordLoader(true));
  return requestFromServer
    .updatePassword(body, req_header)
    .then(response => {
      if (response.data.dataException.err_code === 200) {
        dispatch(actions.passwordLoader(false));
        dispatch(actions.passwordUpdateStatus({ status: 'success', msg: response.data.dataException.err_msg }));
      } else {
        dispatch(actions.passwordLoader(false));
        dispatch(actions.passwordUpdateStatus({ status: 'error', msg: response.data.dataException.err_msg }));
      }
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't update member password";
    });
};

export const getCountryDetails = (body, req_header) => dispatch => {
  return requestFromServer
    .getCountry(body, req_header)
    .then(response => {
      if (response.data.dataException.err_code === 200) {
        dispatch(actions.countryFetched(response.data.data.countries));
      }
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't get countries";
    });
};

export const getCityDetails = (body, req_header) => dispatch => {
  return requestFromServer
    .getCityByCountry(body, req_header)
    .then(response => {
      if (response.data.dataException.err_code === 200) {
        dispatch(actions.citiesFetched(response.data.data));
        return response.data.data;
      }
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't get cities";
    });
};

export const getProvinceDetails = (body, req_header) => dispatch => {
  return requestFromServer
    .getProvinceByCountry(body, req_header)
    .then(response => {
      if (response.data.dataException.err_code === 200) {
        dispatch(actions.provincesFetched(response.data.data));
        return response.data.data;
      }
    })
    .catch(error => {
      console.log(error);
      error.clientMessage = "Can't get province";
    });
};