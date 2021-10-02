export const getAllMenus = () => {
    return dispatch => {
        dispatch({
            type: 'GET_ALL'
        });
    };
};

export const setAllMenus = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL',
            payload: data,
        });
    };
};
export const setAllFilteredMenus = data => {
    return dispatch => {
        dispatch({
            type: 'SET_ALL_FILTERED',
            payload: data,
        });
    };
};

export const setSelectedMenu = data => {
    return dispatch => {
        dispatch({
            type: 'SET_SELECTED_MENU',
            payload: data,
        });
    };
};

export const AddMenu = data => {
    return dispatch => {
        dispatch({
            type: 'ADD_MENU',
            payload: data,
        });
    };
};



export const getMenuyByKey = data => {
    return dispatch => {
        dispatch({
            type: 'GET_MENU_BY_KEY',
            payload: data,
        });
    };
};
export const deleteMenuByKey = data => {
    return dispatch => {
        dispatch({
            type: 'DELETE_MENU_BY_KEY',
            payload: data,
        });
    };
};
export const updateMenuByKey = data => {
    return dispatch => {
        dispatch({
            type: 'UPDATE_MENU_BY_KEY',
            payload: data,
        });
    };
};