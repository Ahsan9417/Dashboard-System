import { setAllProvinces, setSelectedProvinceCountry, AddProvince, deleteProvinceByKey, updateProvinceByKey } from 'redux/actions/Province';
import { DataMethods } from '..';
import axios from './config';

const utilsService = {
    //Promises

    getAllCountries: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

        return new Promise(async (res, rej) => {
            try {
                const token = localStorage.getItem('token');
                axios.defaults.headers.common['AuthorizationKey'] = token;

                let results = await axios
                    .post('country/get', {
                        "display-length": rowCount,
                        "display-start": pageNo * rowCount,
                        "sort-column": sortBy,
                        "sort-direction": sortOrder,
                        "search-text": searchText
                    })
                if (results.status == 200 && results.data.dataException.err_code == 200) {

                    console.log('success');
                    res(results.data.data.countries?.length ? results.data.data.countries : []);

                } else {
                    console.log('no data');
                    res([])

                }

            } catch (error) {
                res([])
            }
        })

    },

    getCountryByKey: (key) => {

        return new Promise(async (res, rej) => {
            try {
                const token = localStorage.getItem('token');
                axios.defaults.headers.common['AuthorizationKey'] = token;

                let results = await axios
                    .post('country/get-by-key', {
                        "country-key": key,

                    })
                if (results.status == 200 && results.data.dataException.err_code == 200) {

                    console.log('success');
                    res(results.data?.data ? results.data.data : {});

                } else {
                    console.log('no data');
                    res([])

                }

            } catch (error) {
                res([])
            }
        })
    },
};

export default utilsService;
