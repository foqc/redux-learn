import { combineReducers } from 'redux';
import books from '../reducers/bookReducer';
import colors from '../reducers/colorReducer';
import session from '../reducers/sessionReducer';
import { errorReducer as error } from '../reducers/errorReducer';

const rootReducer = combineReducers({
    books,
    colors,
    session,
    error
});

export default rootReducer; 