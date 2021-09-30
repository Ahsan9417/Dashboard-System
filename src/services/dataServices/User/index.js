import { DataMethods } from '..';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import axios from './config';

const userService = {
    changePassword: (obj) => {
        return dispatch => {
            dispatch(fetchStart());
            console.log('change pass');
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            console.log('calling country api');

            axios
                .post('api/admin/user/change-password', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(fetchSuccess());

                    } else {
                        dispatch(fetchError(data.error));
                    }
                })
                .catch(function (error) {
                    dispatch(fetchError(error.message));

                });
        };
    },


};

export default userService;
