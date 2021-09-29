
const INIT_STATE = {
    countriesList: [],
    filteredList: [],
    selectedCountry: {},
    searchText: '',
    loading: false,
};

export default (state = INIT_STATE, action) => {
    console.log('in DataRedux');
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

        case 'GET_COUNTRY_BY_KEY':
            return { ...state, selectedCountry: action.payload };

        case 'ADD_COUNTRY':
            return {
                ...state,
                countriesList: [...state.countriesList, action.payload]
            }

        case 'UPDATE_COUNTRY_BY_KEY':
            let index = state.countriesList.findIndex(x => x.id !== action.payload);
            let newArray = [...state.countriesList];
            newArray[index].completed = true
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
