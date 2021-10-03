
const INIT_STATE = {
    provincesList: [],
    filteredList: [],
    selectedProvince: {},
    selectedProvinceCountry: {},
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
                provincesList: action.payload
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
        case 'SET_SELECTED_PROVINCE': {
            return {
                ...state,
                selectedProvince: action.payload
            }
        }
        case 'SET_SELECTED_PROVINCE_COUNTRY': {
            return {
                ...state,
                selectedProvinceCountry: action.payload
            }
        }

        case 'GET_PROVINCE_BY_KEY':
            return { ...state, selectedProvince: action.payload };

        case 'ADD_PROVINCE':
            return {
                ...state,
                provincesList: [action.payload, ...state.provincesList,]
            }

        case 'UPDATE_PROVINCE_BY_KEY':
            let index = state.provincesList.findIndex(x => x["province-key"] === action.payload.key);
            let newArray = [...state.provincesList];
            newArray[index] = action.payload.province
            return {
                ...state,
                provincesList: newArray,
            }

        case 'DELETE_PROVINCE_BY_KEY':
            return {
                ...state,
                provincesList: state.provincesList.filter(x => (x["province-key"] !== action.payload))
            }

        default:
            return state;
    }
};
