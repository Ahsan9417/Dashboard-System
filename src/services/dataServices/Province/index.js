import { setAllProvinces,setRowsCount, setSelectedProvinceCountry, AddProvince, deleteProvinceByKey, updateProvinceByKey, setAllFilteredProvinces } from 'redux/actions/Province';
import { DataMethods } from '..';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import axios from './config';

const provinceService = {

 
    getAllProvinces: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

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
                    if (data.data && data.data.Provinces) {
                        dispatch(setRowsCount(data.data["total-rows"]));

                        dispatch(searchText ? setAllFilteredProvinces(data.data.Provinces) : setAllProvinces(data.data.Provinces));

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

    getProvinceByKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;

            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-key', {
                    "province-key": key,

                })
                .then(({ data }) => {
                    if (data.data && data.data.countries) {

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


    getProvinceByCountryKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-country-key', {
                    "country-key": key,

                })
                .then(({ data }) => {
                    if (data.data && data.data.provinces) {
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

    AddProvince: (province) => {

        return dispatch => {
            let obj = {
                "country-key": province.countryKey,
                "province-name": province.provinceName,
            }

            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;

            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/save', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {

                        dispatch(AddProvince(data.data))
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

    UpdateProvince: (key, updatedProvince) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;
            let obj = {
                "province-name": updatedProvince.provinceName,
                "province-key": key,
                "country-key": updatedProvince.countryKey
            }
            axios
                .post('/update', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        //console.log(data)
                        dispatch(updateProvinceByKey({ province: data.data, key: key }))
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

    DeleteProvince: (province) => {

        return dispatch => {
            //console.log('delete country api');
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;

            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/Delete', {
                    "province-key": province["province-key"]
                })
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(deleteProvinceByKey(province["province-key"]))
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


    //Promises

    getAllCountries: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

        return new Promise(async(res, rej) => {
                try {
                    let token = JSON.parse(localStorage.getItem('user')).key;
                    axios.defaults.headers.common['AuthorizationKey'] = token;
                //console.log('calling country api');

                let results = await axios
                    .post('/get', {
                        "display-length": rowCount,
                        "display-start": pageNo * rowCount,
                        "sort-column": sortBy,
                        "sort-direction": sortOrder,
                        "search-text": searchText
                    })
                if (results) //console.log(results);
                if (results.data && results.data.countries) {
                    res([]);

                } else {
                    res([])

                }

            } catch (error) {
                res([])
            }
            })

    }

};

export default provinceService;
