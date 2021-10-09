import { DataMethods } from '..';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import { AddCountry, setAllCountries, updateCountryByKey, setAllFilteredCountries, deleteCountryByKey, setSelectedCountry, setRowsCount } from '../../../redux/actions/Country';
import axios from './config';

const countryMaster = {
    getAllCountries: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;
            //console.log('calling country api');

            axios
                .post('/get', {
                    "display-length": rowCount,
                    "display-start": (pageNo * rowCount) + (pageNo ? 1 : 0),
                    "sort-column": sortBy,
                    "sort-direction": sortOrder,
                    "search-text": searchText
                })
                .then(({ data }) => {
                    if (data.data && data.data.countries) {
                        dispatch(setRowsCount(data.data["total-rows"]));
                        dispatch(searchText ? setAllFilteredCountries(data.data.countries) : setAllCountries(data.data.countries));
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

    getCountryByKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;
        
            axios
                .post('/get-by-key', {
                    "country-key": key,
                   
                })
                .then(({ data }) => {
                    if (data.data && data.data.countries) {
                        dispatch(setSelectedCountry(data.data))
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

    AddCountry: (country) => {

        return dispatch => {
            //console.log('save country')
            let obj = {
                "country-iso": country.countryISO,
                "country-code": country.countryCode,
                "country-name": country.countryName,
                "currency-code": country.currencyCode
            }

            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/save', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(AddCountry(data.data));

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


    UpdateCountry: (key, updatedCountry) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;
            let obj = {
                "country-iso": updatedCountry.countryISO,
                "country-code": updatedCountry.countryCode,
                "country-name": updatedCountry.countryName,
                "currency-code": updatedCountry.currencyCode,
                "country-key" : key
            }
            axios
                .post('/update', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        //console.log(data)
                        dispatch(updateCountryByKey({country : data.data , key : key}));

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


    DeleteCountry: (country) => {

        return dispatch => {
            //console.log('delete country api');
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/Delete', {
                    "country-key": country["country-key"]
                })
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(deleteCountryByKey(country["country-key"]));
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

export default countryMaster;
