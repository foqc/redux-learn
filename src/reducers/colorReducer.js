import * as types from '../actions/actionTypes';
import initialState from '../reducers/initialState';

export default function colorReducer(state = initialState.colors, action) {
    switch (action.type) {
        case types.LOAD_COLORS_SUCCESS:
            return action.colors;
        default:
            return state;
    }
}