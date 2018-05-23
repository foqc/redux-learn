import _ from 'lodash';

export const createErrorSelector = (actions) => (state) => {
    return _(actions).some((action) =>
        _.get(state, `api.error.${action}`));
};