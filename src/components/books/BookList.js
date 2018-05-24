import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

const BookList = ({ books, match, error }) => {
    if (error) {
        return (<div> *{error.message}</div>);
    }
    return (
        <ul className="list-group">
            {books.map(book =>
                (<li className="list-group-item" key={book.id}>
                    <NavLink to={`${match.url}/${book.id}`} activeClassName="active">{book.author}</NavLink>
                </li>)
            )}
        </ul>
    );
};

BookList.propTypes = {
    books: PropTypes.array,
    match: PropTypes.object.isRequired
};

export default BookList;  