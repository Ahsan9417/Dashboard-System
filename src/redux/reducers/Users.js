
const INIT_STATE = {
    usersList: [],
    filteredList: [],
    selectedUser: {},
    searchText: '',
    loading: false,
    totalRecords: 0
    
};

export default (state = INIT_STATE, action) => {

    switch (action.type) {

        case "GET_ALL":
            return state;

        case 'SET_ALL': {
            return {
                ...state,
                usersList: action.payload
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
        case 'SET_SELECTED_USER': {
            return {
                ...state,
                selectedUser: action.payload
            }
        }


        case 'GET_USER_BY_KEY':
            return { ...state, selectedUser: action.payload };

        case 'ADD_USER':
            return {
                ...state,
                usersList: [action.payload, ...state.usersList,]
            }

        case 'UPDATE_USER_BY_KEY':
            let index = state.usersList.findIndex(x => x["user-key"] === action.payload.key);
            let newArray = [...state.usersList];
            newArray[index] = action.payload.user
            return {
                ...state,
                usersList: newArray,
            }

        case 'SET_ROWS_COUNT': {
            return {
                ...state,
                totalRecords: action.payload
            }
        }
        case 'DELETE_USER_BY_KEY':
            return {
                ...state,
                usersList: state.usersList.filter(x => (x["user-key"] !== action.payload))
            }

        default:
            return state;
    }
};
