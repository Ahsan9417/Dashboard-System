
const INIT_STATE = {
    menusList: [],
    rolesList: [],
    filteredList: [],
    selectedRole: "",
    searchText: '',
    loading: false,
    totalRecords: 0

};

export default (state = INIT_STATE, action) => {

    switch (action.type) {

        case "GET_ALL":
            return state;

        case 'SET_ALL': {

            console.log('set roles');
            return {
                ...state,
                rolesList: action.payload
            }
        }
        case 'SET_ALL_MENUS': {
            return {
                ...state,
                menusList: action.payload
            }
        }
        case "GET_ALL_FILTERED":
            return state;

        case 'SET_ALL_FILTERED': {
            return {
                ...state,
                filteredList: action.payload
            }
        }
        case 'SET_SELECTED_ROLE': {
            return {
                ...state,
                selectedRole: action.payload
            }
        }


        case 'GET_ROLE_BY_KEY':
            return { ...state, selectedRole: action.payload };

        case 'ADD_ROLE':
            return {
                ...state,
                rolesList: [action.payload, ...state.rolesList,]
            }

        case 'UPDATE_ROLE_BY_KEY':
            let index = state.rolesList.findIndex(x => x["menu-rights-mas-key"] === action.payload.key);
            let newArray = [...state.rolesList];
            newArray[index] = action.payload.role
            return {
                ...state,
                rolesList: newArray,
            }

        case 'SET_ROWS_COUNT': {
            return {
                ...state,
                totalRecords: action.payload
            }
        }
        case 'DELETE_ROLE_BY_KEY':
            return {
                ...state,
                rolesList: state.rolesList.filter(x => (x["menu-rights-mas-key"] !== action.payload))
            }

        default:
            return state;
    }
};
