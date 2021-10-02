export const getAllProvinces = () => {
    return dispatch => {
        dispatch({
            type: 'GET_ALL'
        });
    };
};

export const setAllProvinces = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL',
            payload: data,
        });
    };
};
export const setAllFilteredProvinces = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL_FILTERED',
            payload: data,
        });
    };
};

export const setSelectedProvince = data => {
    return dispatch => {
        dispatch({
            type: 'SET_SELECTED_PROVINCE',
            payload: data,
        });
    };
};

export const AddProvince = data => {
    return dispatch => {
        dispatch({
            type: 'ADD_PROVINCE',
            payload: data,
        });
    };
};



export const getProvinceyByKey = data => {
    return dispatch => {
        dispatch({
            type: 'GET_PROVINCE_BY_KEY',
            payload: data,
        });
    };
};
export const deleteProvinceByKey = data => {
    return dispatch => {
        dispatch({
            type: 'DELETE_PROVINCE_BY_KEY',
            payload: data,
        });
    };
};
export const updateProvinceByKey = data => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_PROVINCE_BY_KEY',
            payload: data,
        });
    };
};