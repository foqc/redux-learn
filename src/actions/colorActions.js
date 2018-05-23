import { LOAD_COLORS_SUCCESS } from '../../src/actions/actionTypes';
import colorApi from '../../src/api/colorApi';

export function loadColors() {
    return function (dispatch) {
        return colorApi.getAllColors().then(colors => {
            dispatch(loadColorsSuccess(colors));
        }).catch(error => {
            throw (error);
        });
    };
}

export function loadColorsSuccess(colors) {
    return { type: LOAD_COLORS_SUCCESS, colors };
}