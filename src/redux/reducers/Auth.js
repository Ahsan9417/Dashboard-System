import { SEND_FORGET_PASSWORD_EMAIL, UPDATE_AUTH_USER, UPDATE_LOAD_USER } from '../../@jumbo/constants/ActionTypes';

//first declare name of variable as key in initial state
const INIT_STATE = {
  authUser: null,
  loadUser: false,
  send_forget_password_email: false,
  authorizedMenu: [],
};

export default (state = INIT_STATE, action) => {

  switch (action.type) {
    case UPDATE_AUTH_USER: {
      return {
        ...state,
        authUser: action.payload,
        loadUser: true,
      };
    }
    case UPDATE_LOAD_USER: {
      return {
        ...state,
        loadUser: action.payload,
      };
    }
    case SEND_FORGET_PASSWORD_EMAIL: {
      return {
        ...state,
        send_forget_password_email: action.payload,
      };
    }
    case 'SET_AUTH_MENU': {
      return {
        ...state,
        authorizedMenu: action.payload,
      };
    }
    default:
      return state;
  }
};
