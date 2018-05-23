import { combineReducers } from 'redux';
import books from '../reducers/bookReducer';
import colors from '../reducers/colorReducer';
import session from '../reducers/sessionReducer';

const rootReducer = combineReducers({
    books,
    colors,
    session
});

export default rootReducer; 