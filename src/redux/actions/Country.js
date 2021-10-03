export const getAllCountries = () => {
    return dispatch => {
        console.log('getAllCountries in actions');
        dispatch({
            type: 'GET_ALL'
        });
    };
};

export const setAllCountries = data => {
    return dispatch => {
        console.log('setAllCountries', data);
        dispatch({
            type: 'SET_ALL',
            payload: data,
        });
    };
};
export const setAllFilteredCountries = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL_FILTERED',
            payload: data,
        });
    };
};

export const setSelectedCountry = data => {
    return dispatch => {
        dispatch({
            type: 'SET_SELECTED_COUNTRY',
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
export const AddCountry = data => {
    return dispatch => {
        console.log('AddCountry', data);
        dispatch({
            type: 'ADD_COUNTRY',
            payload: data,
        });
    };
};
export const getCountryByKey = data => {
    return dispatch => {
        console.log('getCountryByKey', data);
        dispatch({
            type: 'GET_COUNTRY_BY_KEY',
            payload: data,
        });
    };
};
export const deleteCountryByKey = data => {
    return dispatch => {
        console.log('deleteCountryByKey', data);
        dispatch({
            type: 'DELETE_COUNTRY_BY_KEY',
            payload: data,
        });
    };
};
export const updateCountryByKey = data => {
    return dispatch => {
        console.log('updateCountryByKey', data);
        dispatch({
            type: 'UPDATE_COUNTRY_BY_KEY',
            payload: data,
        });
    };
};