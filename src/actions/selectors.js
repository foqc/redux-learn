export const createErrorSelector = actions => (state) => {
    const errors = actions.map(action => state.error[action]);
    const filterErrors = errors.filter(error => error);//if there is an error
    if (filterErrors && filterErrors[0]) {
        return filterErrors[0];
    }
    return '';
};

export const createLoadingSelector = actions => state =>
    actions.some(action => state.loading[action]);