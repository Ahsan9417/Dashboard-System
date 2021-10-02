import { DataMethods } from '..';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import axios from './config';

const userRole = {
    getAllMenus: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

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

    getMenuByKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-key', {
                    "menu-rights-mas-key": key,

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

    AddMenu: (menu) => {

        return dispatch => {
            console.log('save country')
            let obj = {
                "country-iso": menu.countryISO,
                "country-code": menu.countryCode,
                "country-name": menu.countryName,
                "currency-code": menu.currencyCode
            }

            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/save', obj)
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


    UpdateMenu: (key, updatedMenu) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            let obj = {
                "country-iso": updatedMenu.countryISO,
                "country-code": updatedMenu.countryCode,
                "country-name": updatedMenu.countryName,
                "currency-code": updatedMenu.currencyCode,
                "country-key": key
            }
            axios
                .post('/update', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        console.log(data)

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


    DeleteMenu: (menu) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/Delete', {
                    "menu-rights-mas-key": menu["menu-rights-mas-key"]
                })
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

export default userRole;
