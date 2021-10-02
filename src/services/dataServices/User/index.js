import { DataMethods } from '..';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import axios from './config';

const userService = {

    getAllUsers: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/get', {
                    "display-length": rowCount,
                    "display-start": pageNo * rowCount,
                    "sort-column": sortBy,
                    "sort-direction": sortOrder,
                    "search-text": searchText
                })
                .then(({ data }) => {
                    if (data.data && data.data.countries) {
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


    registerUser: (obj) => {
        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('save', obj)
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

    updateUser: (obj) => {
        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('update', obj)
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

    deleteUser: (obj) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('get-by-key', obj)
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

    getUserByKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-key', {
                    "country-key": key,

                })
                .then(({ data }) => {
                    if (data.data && data.data.countries) {
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
    getBranchList: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-comp-branch-menu-mas')
                .then(({ data }) => {
                    if (data.data && data.data.countries) {
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
