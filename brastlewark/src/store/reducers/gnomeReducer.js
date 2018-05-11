import * as actionTypes from '../actionTypes';

const initialState = {
    gnomeList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_GNOMES:
            return {
                ...state,
                gnomeList: action.gnomeList
            }
        default: return state;
    }
}
export default reducer;