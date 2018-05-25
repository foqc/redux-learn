import { combineReducers } from 'redux';
import books from '../reducers/bookReducer';
import colors from '../reducers/colorReducer';
import session from '../reducers/sessionReducer';
import { errorReducer as error } from '../reducers/errorReducer';
import { loadingReducer as loading } from '../reducers/loadingReducer';

const rootReducer = combineReducers({
    books,
    colors,
    session,
    error,
    loading
});

export default rootReducer; 