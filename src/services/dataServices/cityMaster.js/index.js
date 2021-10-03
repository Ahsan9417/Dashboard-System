import { DataMethods } from '..';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import { AddCity, setAllCities, updateCityByKey, setAllFilteredCities, deleteCityByKey, setSelectedCity } from '../../../redux/actions/City';
import axios from './config';

const cityMaster = {
    getAllCities: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

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
                    if (data.data && data.data.cities) {
                        dispatch(searchText ? setAllFilteredCities(data.data.cities) : setAllCities(data.data.cities));
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

    getCityByKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-key', {
                    "city-key": key,

                })
                .then(({ data }) => {
                    if (data.data && data.data.cities) {
                        dispatch(setSelectedCity(data.data))
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

    getCityByCountryKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-key', {
                    "country-key": key,

                })
                .then(({ data }) => {
                    if (data.data && data.data.cities) {
                        // dispatch(setSelectedCity(data.data))
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

    AddCity: (city) => {

        return dispatch => {
            console.log('save city')
            let obj = {
                "city-iso": city.cityISO,
                "city-code": city.cityCode,
                "city-name": city.cityName,
                "currency-code": city.currencyCode
            }

            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/save', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(AddCity(data.data));

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


    UpdateCity: (key, updatedCity) => {

        return dispatch => {
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            let obj = {
                "city-iso": updatedCity.cityISO,
                "city-code": updatedCity.cityCode,
                "city-name": updatedCity.cityName,
                "currency-code": updatedCity.currencyCode,
                "city-key": key
            }
            axios
                .post('/update', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        console.log(data)
                        dispatch(updateCityByKey({ city: data.data, key: key }));

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


    DeleteCity: (city) => {

        return dispatch => {
            console.log('delete city api');
            dispatch(fetchStart());
            const token = localStorage.getItem('token');
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/Delete', {
                    "city-key": city["city-key"]
                })
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code) {
                        dispatch(deleteCityByKey(data.data["city-key"]));
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

export default cityMaster;
