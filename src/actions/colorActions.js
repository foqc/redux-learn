import { LOAD_COLORS_SUCCESS, LOAD_COLORS_FAILURE, LOAD_COLORS_REQUEST } from '../../src/actions/actionTypes';
import colorApi from '../../src/api/colorApi';

export function loadColors() {
    return function (dispatch) {
        dispatch({ type: LOAD_COLORS_REQUEST });
        return colorApi.getAllColors().then(colors => {
            dispatch(loadColorsSuccess(colors));
        }).catch(error => {
            dispatch(loadColorsFailure(error));
        });
    };
}

export function loadColorsSuccess(colors) {
    return { type: LOAD_COLORS_SUCCESS, colors };
}

export function loadColorsFailure(error) {
    return { type: LOAD_COLORS_FAILURE, error };
}