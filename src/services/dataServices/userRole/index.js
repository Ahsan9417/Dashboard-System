import { AddRole, setAllRoles, deleteRoleByKey, setAllFilteredRoles, setAllMenus, setSelectedRole, updateRoleByKey, setRowsCount } from 'redux/actions/UserRole';
import { DataMethods } from '..';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import axios from './config';

const userRole = {
    getAllPrivileges: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;

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
                    if (data.data) {
                        // dispatch(setRowsCount(data.data["total-rows"]));
                        dispatch(searchText ? setAllFilteredRoles(data.data?.length ? data.data : []) : setAllRoles(data.data?.length ? data.data : []));
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
    getAllMenus: () => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;

            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/get-all-menu')
                .then(({ data }) => {
                    if (data.data) {

                        dispatch(setAllMenus(data.data?.length ? data.data : []));
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

    getRoleByKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;

            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-key', {
                    "menu-rights-mas-key": key,

                })
                .then(({ data }) => {
                    if (data.data) {
                        dispatch(setSelectedRole(data.data))
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

    AddRole: (menu) => {
        return dispatch => {
            let obj = {
                "menu-rights-name": menu["menu-rights-name"],
                "list-privilege": menu["list-privilege"]
            }

            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;

            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/save', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(AddRole(data.data))
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


    UpdateRole: (key, updatedRole) => {

        return dispatch => {

            let obj = {
                "menu-rights-name": updatedRole["menu-rights-name"],
                "list-privilege": updatedRole["list-privilege"],
                "menu-rights-mas-key": key
            }
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;

            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/save', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(updateRoleByKey(data.data))
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


    DeleteRole: (menu) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;

            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/Delete', {
                    "menu-rights-mas-key": menu["menu-rights-mas-key"]
                })
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(deleteRoleByKey(menu["menu-rights-mas-key"]))
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

};

export default userRole;
