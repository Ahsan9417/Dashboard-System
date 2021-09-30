
const INIT_STATE = {
    citiesList: [],
    filteredList: [],
    selectedCity: {},
    searchText: '',
    loading: false,
};

export default (state = INIT_STATE, action) => {
    
    switch (action.type) {

        case "GET_ALL":
            return state;
            
        case 'SET_ALL': {
            return {
                ...state,
                citiesList: action.payload
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
        case 'SET_SELECTED_CITY': {
            return {
                ...state,
                selectedCity: action.payload
            }
        }

        case 'GET_CITY_BY_KEY':
            return { ...state, selectedCity: action.payload };

        case 'ADD_CITY':
            return {
                ...state,
                citiesList: [...state.citiesList, action.payload]
            }

        case 'UPDATE_CITY_BY_KEY':
            let index = state.citiesList.findIndex(x => x["CITY-key"] === action.payload.key);
            let newArray = [...state.citiesList];
            newArray[index] = action.payload.CITY
            return {
                ...state,
                citiesList: newArray,
            }

        case 'DELETE_CITY_BY_KEY':
            return {
                ...state,
                citiesList: state.citiesList.filter(x => (x["CITY-key"] !== action.payload))
            }

        default:
            return state;
    }
};
