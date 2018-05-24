import * as types from '../actions/actionTypes';
import initialState from '../reducers/initialState';
import history from "../history";

export default function bookReducer(state = initialState.books, action) {
  switch (action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;
    case types.CREATE_BOOK_SUCCESS:
      //history.push(`/books/${action.book.id}`);
      return [
        ...state, action.book
      ];
    case types.UPDATE_BOOK_SUCCESS:
      return [
        ...state.filter(book => book.id !== action.book.id),
        Object.assign({}, action.book)
      ];
    case types.DELETE_BOOK_SUCCESS: {
      /*const newState = Object.assign([], state);
      const indexOfBookToDelete = state.findIndex(book => {
        return book.id == action.book.id;
      });
      newState.splice(indexOfBookToDelete, 1);
      history.push('/books');*/
      history.push('/books');
      return [
        ...state.filter(book => book.id !== action.book.id)
      ];
    }
    default:
      return state;
  }
}