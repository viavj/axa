import * as actionTypes from '../actionTypes';

const initialState = {
    layoutType: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_LAYOUT_TYPE:
            return {
                ...state,
                layoutType: action.layoutType
            }
        default: return state;
    }
}
export default reducer;