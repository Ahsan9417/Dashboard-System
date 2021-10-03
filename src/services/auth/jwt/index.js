import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import { setAuthUser, setForgetPassMailSent, updateLoadUser } from '../../../redux/actions/Auth';
import React from 'react';
import axios from './config';

const JWTAuth = {
  onRegister: ({ name, email, password }) => {
    return dispatch => {
      dispatch(fetchStart());
      axios
        .post('auth/register', {
          email: email,
          password: password,
          name: name,
        })
        .then(({ data }) => {
          if (data.result) {
            localStorage.setItem('token', data.token.access_token);
            axios.defaults.headers.common['AuthorizationKey'] = data.token.access_token;
            dispatch(fetchSuccess());
            dispatch(JWTAuth.getAuthUser(true, data.token.access_token));
          } else {
            dispatch(fetchError(data.error));
          }
        })
        .catch(function (error) {
          dispatch(fetchError(error.message));
        });
    };
  },

  onLogin: ({ email, password }) => {
    return dispatch => {
      try {

        dispatch(fetchStart());
        axios
          .post('api/admin/user/validate-login', {
            Username: email,
            Password: password,
          })
          .then(({ data }) => {

            if (data && data.dataException.err_code == 200) {
              localStorage.setItem('token', data.data.key);
              axios.defaults.headers.common['AuthorizationKey'] = data.data.key;
              dispatch(fetchSuccess(data.dataException.err_msg));
              localStorage.setItem('user', data.data.userMenu[0]['child-key']);
              dispatch(JWTAuth.getAuthUser(true, data.data.key));
            } else {

              dispatch(fetchError(data.dataException.err_msg));
            }
          })
          .catch(function (error) {
            dispatch(fetchError(error.message));
          });
      } catch (error) {
        dispatch(fetchError(error.message));
      }
    };
  },
  onLogout: () => {
    return dispatch => {
      dispatch(fetchStart());

      setTimeout(
        data => {
          // axios
          //   .post('auth/logout')
          //   .then(({ data }) => {
          if (data.result) {
            dispatch(fetchSuccess());
            localStorage.removeItem('token');
            localStorage.removeItem('user');

            dispatch(setAuthUser(null));

          } else {
            dispatch(fetchError(data.error));
          }
        },
        2000,
        { result: 'user logout' },
      );
      // })
      // .catch(function (error) {
      //   dispatch(fetchError(error.message));
      // });
    };
  },

  getAuthUser: (loaded = false, token) => {
    return dispatch => {
      let user_key = localStorage.getItem('user');
      if (!token) {
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['AuthorizationKey'] = token;
      }

      if (user_key) {

        dispatch(fetchStart());
        dispatch(updateLoadUser(loaded));
        axios
          .post('admin/get-by-key', { 'user-key': user_key })
          .then(({ data }) => {

            if (data.data) {
              let user = data.data;
              dispatch(fetchSuccess());
              dispatch(setAuthUser(user));
            } else {
              dispatch(JWTAuth.onLogout())
              dispatch(updateLoadUser(true));
            }
          })
          .catch(error => {
            console.log('get by key catch', error);
            dispatch(updateLoadUser(true));

            dispatch(JWTAuth.onLogout())
          });
      } else {
        dispatch(updateLoadUser(true));

        dispatch(JWTAuth.onLogout())
      }
    };
  },

  onForgotPassword: () => {
    return dispatch => {
      dispatch(fetchStart());

      setTimeout(() => {
        dispatch(setForgetPassMailSent(true));
        dispatch(fetchSuccess());
      }, 300);
    };
  },
  getSocialMediaIcons: () => {
    return <React.Fragment> </React.Fragment>;
  },

  changePassword: (obj) => {
    return dispatch => {
      dispatch(fetchStart());
      const token = localStorage.getItem('token');
      axios.defaults.headers.common['AuthorizationKey'] = token;
      axios
        .post('api/admin/user/change-password', obj)
        .then(({ data }) => {
          if (data.data && data.dataException.err_code == 200) {
            dispatch(fetchSuccess(data.dataException.err_msg));

          } else {
            dispatch(fetchError(data.dataException.err_msg));
          }
        })
        .catch(function (error) {
          dispatch(fetchError(error.message));

        });
    };
  },

};

export default JWTAuth;
