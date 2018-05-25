import {
    LOAD_BOOKS_SUCCESS,
    LOAD_BOOKS_FAILURE,
    UPDATE_BOOK_SUCCESS,
    CREATE_BOOK_SUCCESS,
    DELETE_BOOK_SUCCESS,
    LOAD_BOOKS_REQUEST
} from '../../src/actions/actionTypes';
import bookApi from '../../src/api/bookApi';

export function loadBooks() {
    return function (dispatch) {
        dispatch({ type: LOAD_BOOKS_REQUEST });
        return bookApi.getAllBooks().then(books => {
            dispatch(loadBooksSuccess(books));
        }).catch(error => {
            dispatch(loadBooksFailure(error));
        });
    };
}

export function loadBooksSuccess(books) {
    return { type: LOAD_BOOKS_SUCCESS, books };
}

export function loadBooksFailure(error) {
    return { type: LOAD_BOOKS_FAILURE, error };
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