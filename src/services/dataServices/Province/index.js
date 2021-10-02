import { DataMethods } from '..';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import axios from './config';

const provinceService = {
    getAllProvinces: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

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
                    if (data.data && data.data.provinces) {
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

    getProvinceByKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-key', {
                    "province-key": key,

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


    getProvinceByCountryKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-country-key', {
                    "country-key": key,

                })
                .then(({ data }) => {
                    if (data.data && data.data.provinces) {
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

    AddProvince: (obj) => {

        return dispatch => {
            let obj = {
                "country-key": obj.countryKey,
                "province-key": obj.provinceKey,

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

    UpdateProvince: (key, updatedProvince) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            let obj = {
                // "country-key": country.countryISO,
                // "province-key": country.countryCode,
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

    DeleteProvince: (country) => {

        return dispatch => {
            console.log('delete country api');
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/Delete', {
                    "province-key": country["country-key"]
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

export default provinceService;
