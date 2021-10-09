import { setAllFilteredHotels ,setRowsCount,setAllHotels,addHotel,updateHotelByKey, setSelectedHotel, deleteHotelByKey} from 'redux/actions/Hotel';
import { DataMethods } from '..';
import { fetchError, fetchStart, fetchSuccess } from '../../../redux/actions';
import axios from './config';

const hotelService = {
    getAllHotels: (searchText = "", pageNo = 0, rowCount = 10, sortBy = 0, sortOrder = 'DESC') => {

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
                    if (data.data && data.data["hotel-types"]) {
                        dispatch(setRowsCount(data.data["total-rows"]));

                        dispatch(searchText ? setAllFilteredHotels(data.data["hotel-types"]) : setAllHotels(data.data["hotel-types"]));
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

    getHotelByKey: (key) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;

            axios
                .post('/get-by-key', {
                    "hotel-type-key": key,

                })
                .then(({ data }) => {
                    if (data.data) {
                        dispatch(setSelectedHotel(data.data))
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



    AddHotel: (hotel) => {

        return dispatch => {
            //console.log('save city')
            let obj = {
                "hotel-type-desc": hotel.hotelName,

            }

            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/save', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        dispatch(addHotel(data.data));

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


    UpdateHotel: (key, updatedHotel) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;
            let obj = {
                "hotel-type-key": key,
                "hotel-type-desc": updatedHotel.hotelName,

            }
            axios
                .post('/update', obj)
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code == 200) {
                        //console.log(data)
                        dispatch(updateHotelByKey({ hotel: data.data, key: key }));

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


    DeleteHotel: (hotel) => {

        return dispatch => {
            dispatch(fetchStart());
            let token = JSON.parse(localStorage.getItem('user')).key;
            axios.defaults.headers.common['AuthorizationKey'] = token;
            axios
                .post('/Delete', {
                    "hotel-type-key": hotel["hotel-type-key"]
                })
                .then(({ data }) => {
                    if (data.data && data.dataException.err_code) {
                        dispatch(deleteHotelByKey(hotel["hotel-type-key"]));
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

export default hotelService;
