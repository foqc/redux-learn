import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
import BookList from '../books/BookList';
import BookPage from '../books/BookPage';
import NewBookPage from '../books/NewBookPage';
import { createErrorSelector } from '../../actions/selectors';

class BooksPage extends React.Component {
  render() {
    const books = this.props.books;
    const match = this.props.match;
    const error = this.props.error;
    return (
      <div className="row">
        <div className="col-md-4">
          <h1>
            Books
            <NavLink to={`${match.url}/new`} className="btn btn-primary"> + Book </NavLink>
          </h1>
          <BookList books={books} match={match} error={error} />
        </div>
        <Switch>
          <Route path={`${match.path}/new`} component={NewBookPage} />
          <Route path={`${match.path}/:id`} component={BookPage} />
        </Switch>
      </div>
    );
  }
}
const errorSelector = createErrorSelector(['LOAD_BOOKS']);
function mapStateToProps(state, ownProps) {
  return {
    books: state.books,
    match: ownProps.match,
    error: errorSelector(state)
  };
}

BooksPage.propTypes = {
  books: PropTypes.array,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(BooksPage);