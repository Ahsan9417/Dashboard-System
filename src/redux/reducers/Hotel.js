
const INIT_STATE = {
    hotelsList: [],
    filteredList: [],
    selectedHotel: {},
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
                hotelsList: action.payload
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
        case 'SET_SELECTED_HOTEL': {
            return {
                ...state,
                selectedHotel: action.payload
            }
        }

        case 'GET_HOTEL_BY_KEY':
            return { ...state, selectedHotel: action.payload };

        case 'ADD_HOTEL':
            return {
                ...state,
                // hotelsList: [...state.hotelsList, action.payload] //Append
                hotelsList: [action.payload, ...state.hotelsList] //prepend
            }

        case 'UPDATE_HOTEL_BY_KEY':
            let index = state.hotelsList.findIndex(x => x["hotel-type-key"] === action.payload.key);
            let newArray = [...state.hotelsList];
            newArray[index] = action.payload.hotel
            return {
                ...state,
                hotelsList: newArray,
            }
        case 'SET_ROWS_COUNT': {
            return {
                ...state,
                totalRecords: action.payload
            }
        }

        case 'DELETE_HOTEL_BY_KEY':
            return {
                ...state,
                hotelsList: state.hotelsList.filter(x => (x["hotel-type-key"] !== action.payload))
            }

        default:
            return state;
    }
};
