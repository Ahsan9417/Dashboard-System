
export const getAllRoles = () => {
    return dispatch => {
        dispatch({
            type: 'GET_ALL'
        });
    };
};
export const setAllRoles = (data) => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL',
            payload: data,
        });
    };
};
export const getAllMenus = () => {
    return dispatch => {
        dispatch({
            type: 'GET_ALL_MENUS'
        });
    };
};
export const setAllMenus = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL_MENUS',
            payload: data,
        });
    };
};
export const setAllFilteredRoles= data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL_FILTERED',
            payload: data,
        });
    };
};

export const setSelectedRole = data => {
    return dispatch => {
        dispatch({
            type: 'SET_SELECTED_ROLE',
            payload: data,
        });
    };
};

export const AddRole = data => {
    return dispatch => {
        dispatch({
            type: 'ADD_ROLE',
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

export const getRoleByKey = data => {
    return dispatch => {
        dispatch({
            type: 'GET_ROLE_BY_KEY',
            payload: data,
        });
    };
};

export const deleteRoleByKey = data => {
    return dispatch => {
        dispatch({
            type: 'DELETE_ROLE_BY_KEY',
            payload: data,
        });
    };
};
export const updateRoleByKey = data => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_ROLE_BY_KEY',
            payload: data,
        });
    };
};