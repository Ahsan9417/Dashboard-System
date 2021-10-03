export const getAllHotels = () => {
    return dispatch => {
        dispatch({
            type: 'GET_ALL'
        });
    };
};

export const setAllHotels = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL',
            payload: data,
        });
    };
};
export const setAllFilteredHotels = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL_FILTERED',
            payload: data,
        });
    };
};

export const setSelectedHotel = data => {
    return dispatch => {
        dispatch({
            type: 'SET_SELECTED_HOTEL',
            payload: data,
        });
    };
};

export const addHotel = data => {
    return dispatch => {
        console.log('AddHotel', data);
        dispatch({
            type: 'ADD_HOTEL',
            payload: data,
        });
    };
};
export const getHotelByKey = data => {
    return dispatch => {
        console.log('getHotelByKey', data);
        dispatch({
            type: 'GET_HOTEL_BY_KEY',
            payload: data,
        });
    };
};

export const setRowsCount = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ROWS_COUNT',
            payload: data,
        });
    };
};
export const deleteHotelByKey = data => {
    return dispatch => {
        console.log('deleteHotelByKey', data);
        dispatch({
            type: 'DELETE_HOTEL_BY_KEY',
            payload: data,
        });
    };
};
export const updateHotelByKey = data => {
    return dispatch => {
        console.log('updateHotelByKey', data);
        dispatch({
            type: 'UPDATE_HOTEL_BY_KEY',
            payload: data,
        });
    };
};