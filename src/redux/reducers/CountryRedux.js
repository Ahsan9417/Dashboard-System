
const INIT_STATE = {
    countriesList: [],
    filteredList: [],
    selectedCountry: {},
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
                countriesList: action.payload
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
        case 'SET_SELECTED_COUNTRY': {
            return {
                ...state,
                selectedCountry: action.payload
            }
        }

        case 'GET_COUNTRY_BY_KEY':
            return { ...state, selectedCountry: action.payload };

        case 'ADD_COUNTRY':
            return {
                ...state,
                // countriesList: [...state.countriesList, action.payload] //Append
                countriesList: [action.payload,...state.countriesList ] //prepend
            }

        case 'UPDATE_COUNTRY_BY_KEY':
            let index = state.countriesList.findIndex(x => x["country-key"] === action.payload.key);
            let newArray = [...state.countriesList];
            newArray[index] = action.payload.country
            return {
                ...state,
                countriesList: newArray,
            }

        case 'DELETE_COUNTRY_BY_KEY':
            return {
                ...state,
                countriesList: state.countriesList.filter(x => (x["country-key"] !== action.payload))
            }

        default:
            return state;
    }
};
