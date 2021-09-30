export const getAllCities = () => {
    return dispatch => {
        dispatch({
            type: 'GET_ALL'
        });
    };
};

export const setAllCities = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL',
            payload: data,
        });
    };
};
export const setAllFilteredCities = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL_FILTERED',
            payload: data,
        });
    };
};

export const AddCity = data => {
    return dispatch => {
        dispatch({
            type: 'ADD_CITY',
            payload: data,
        });
    };
};
export const getCityyByKey = data => {
    return dispatch => {
        dispatch({
            type: 'GET_CITY_BY_KEY',
            payload: data,
        });
    };
};
export const deleteCityByKey = data => {
    return dispatch => {
        dispatch({
            type: 'DELETE_CITY_BY_KEY',
            payload: data,
        });
    };
};
export const updateCityByKey = data => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_CITY_BY_KEY',
            payload: data,
        });
    };
};