import _ from 'lodash';

export const createErrorSelector = (actions) => (state) => {
    return _(actions)
        .map((action) => _.get(state, `error.${action}`))
        .compact()
        .first() || '';
};