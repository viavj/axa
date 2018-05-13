import * as actionTypes from '../actionTypes';

const initialState = {
    gnomeList: [],
    fetchedGnomes: [],
    filteredGnomes: [],
    gnomesPerPage: 15,
    searchString: '',
    gnome: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_GNOMES:
            return {
                ...state,
                gnomeList: action.gnomeList
            }
        case actionTypes.GET_GNOME:
            return {
                ...state,
                gnome: action.gnome
            }
        case actionTypes.FETCH_GNOMES:
            return {
                ...state,
                fetchedGnomes: action.fetchedGnomes,
                filteredGnomes: action.filteredGnomes,
                searchString: action.searchString
            }
        default: return state;
    }
}
export default reducer;