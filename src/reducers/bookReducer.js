import * as types from '../actions/actionTypes';
import initialState from '../reducers/initialState';
import history from "../history";

export default function bookReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;
    case types.CREATE_BOOK_SUCCESS:
      history.push(`/books/${action.book._id}`);
      return [
        ...state, action.book
      ];
    case types.UPDATE_BOOK_SUCCESS:
      return [
        ...state.filter(book => book._id !== action.book._id),
        action.book
      ];
    case types.DELETE_BOOK_SUCCESS: {
      history.push('/books');
      return [
        ...state.filter(book => book._id !== action.book._id)
      ];
    }
    default:
      return state;
  }
}