export const getAllUsers = () => {
    return dispatch => {
        dispatch({
            type: 'GET_ALL'
        });
    };
};

export const setAllUsers = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL',
            payload: data,
        });
    };
};
export const setAllFilteredUsers = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL_FILTERED',
            payload: data,
        });
    };
};

export const setSelectedUser = data => {
    return dispatch => {
        dispatch({
            type: 'SET_SELECTED_USER',
            payload: data,
        });
    };
};

export const AddUser = data => {
    return dispatch => {
        dispatch({
            type: 'ADD_USER',
            payload: data,
        });
    };
};



export const getUseryByKey = data => {
    return dispatch => {
        dispatch({
            type: 'GET_USER_BY_KEY',
            payload: data,
        });
    };
};
export const deleteUserByKey = data => {
    return dispatch => {
        dispatch({
            type: 'DELETE_USER_BY_KEY',
            payload: data,
        });
    };
};
export const updateUserByKey = data => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_USER_BY_KEY',
            payload: data,
        });
    };
};