import { AddUser, deleteUserByKey, setAllFilteredUsers, setAllUsers,setRowsCount,setSelectedUser,updateUserByKey } from 'redux/actions/User';
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
                    "display-start": (pageNo * rowCount) + (pageNo ? 1 : 0),
                    "sort-column": sortBy,
                    "sort-direction": sortOrder,
                    "search-text": searchText
                })
                .then(({ data }) => {
                    if (data.data && data.data["user-list"]) {
                        dispatch(setRowsCount(data.data["total-rows"]));

                        dispatch(searchText ? setAllFilteredUsers(data.data["user-list"]) : setAllUsers(data.data["user-list"]));

                        dispatch(fetchSuccess());

                    } else {
                        dispatch(fetchError(data.dataException.err_msg ? data.dataException.err_msg : data.error));

                    }

                })
                .catch(function (error) {
                    dispatch(fetchError(error.message));

                });
        };
    },

    registerUser: (obj) => {
        return dispatch => {

            let user = {
                "user-name": obj.userName,
                "password": obj.password,
                "confirm-password": obj.confirmPassword,
                "user-branches": obj.branchList,

            }
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('save', user)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(AddUser(data.data))
                        dispatch(fetchSuccess(data.dataException.err_msg));

                    } else {
                        dispatch(fetchError(data.dataException.err_msg ? data.dataException.err_msg : data.error));
                    }
                })
                .catch(function (error) {
                    dispatch(fetchError(error.message));

                });
        };
    },

    updateUser: (key, obj) => {
        return dispatch => {
            dispatch(fetchStart());
            
            let user = {
                "user-name": obj.userName,
                "password": obj.password,
                "confirm-password": obj.confirmPassword,
                "user-branches": obj.branchList,
                "user-key":key

            }
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('update', user)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(updateUserByKey(data.data))
                        dispatch(setSelectedUser({}))

                        dispatch(fetchSuccess(data.dataException.err_msg));

                    } else {
                        dispatch(fetchError(data.dataException.err_msg ? data.dataException.err_msg : data.error));
                    }
                })
                .catch(function (error) {
                    dispatch(fetchError(error.message));

                });
        };
    },

    deleteUser: (user) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/Delete', {
                    "user-key": user["user-key"]
                })
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(deleteUserByKey(user["user-key"]))
                        dispatch(fetchSuccess(data.dataException.err_msg));

                    } else {
                        dispatch(fetchError(data.dataException.err_msg ? data.dataException.err_msg : data.error));
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
                    "user-key": key,

                })
                .then(({ data }) => {
                    if (data.data) {
                        dispatch(setSelectedUser(data.data))
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
