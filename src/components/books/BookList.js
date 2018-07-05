import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import LoadErrorHandler from '../error/ErrorComponent';

const BookList = ({ books, match, error, loading }) => {
    return (
        <LoadErrorHandler showError={error} loading={loading}>
            <ul className="list-group">
                { books.map(book =>
                    (<li className="list-group-item" key={book._id}>
                        <NavLink to={`${match.url}/${book._id}`} activeClassName="active">{book.author}</NavLink>
                    </li>)
                )}
            </ul>
        </LoadErrorHandler>
    );
};

BookList.propTypes = {
    books: PropTypes.array,
    match: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
};

export default BookList;  