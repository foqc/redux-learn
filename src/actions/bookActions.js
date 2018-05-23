import {
    LOAD_BOOKS_SUCCESS,
    UPDATE_BOOK_SUCCESS,
    CREATE_BOOK_SUCCESS,
    DELETE_BOOK_SUCCESS
} from '../../src/actions/actionTypes';
import bookApi from '../../src/api/bookApi';

export function loadBooks() {
    return function (dispatch) {
        return bookApi.getAllBooks().then(books => {
            dispatch(loadBooksSuccess(books));
        }).catch(error => {
            //throw (error);
            dispatch({ type: 'LOAD_BOOKS_ERROR', books: [], error });
        });
    };
}

export function loadBooksSuccess(books) {
    return { type: LOAD_BOOKS_SUCCESS, books };
}

export function updateBook(book) {
    return function (dispatch) {
        return bookApi.updateBook(book).then(responseBook => {
            dispatch(updateBookSuccess(responseBook));
        }).catch(error => {
            throw (error);
        });
    };
}

export function updateBookSuccess(book) {
    return { type: UPDATE_BOOK_SUCCESS, book };
}

export function createBook(book) {
    return function (dispatch) {
        return bookApi.createBook(book).then(responseBook => {
            dispatch(createBookSuccess(responseBook));
            return responseBook;
        }).catch(error => {
            throw (error);
        });
    };
}

export function createBookSuccess(book) {
    return { type: CREATE_BOOK_SUCCESS, book };
}

export function deleteBook(book) {
    return function (dispatch) {
        return bookApi.deleteBook(book).then(() => {
            dispatch(deleteBookSuccess(book));
            return;
        }).catch(error => {
            throw (error);
        });
    };
}


export function deleteBookSuccess(book) {
    return { type: DELETE_BOOK_SUCCESS, book };
}