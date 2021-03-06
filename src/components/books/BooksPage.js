import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
import BookList from '../books/BookList';
import BookPage from '../books/BookPage';
import NewBookPage from '../books/NewBookPage';
import { createErrorSelector, createLoadingSelector } from '../../actions/selectors';
import { loadBooks } from '../../actions/bookActions';
import { loadColors } from '../../actions/colorActions';
import Container from '../../common/Container';

class BooksPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadBooks());
    this.props.dispatch(loadColors());
  }
  render() {
    const { books, match, error, loading } = this.props;
    return (
      <Container mainHeader="BOOKS" secondHeader="LIST OF BOOK" infoHeader="My Books">
        <div className="row">
          <div className="col-md-4">
            <h1>
              Books
            <NavLink to={`${match.url}/new`} className="btn btn-primary"> + Book </NavLink>
            </h1>
            <BookList books={books} match={match} error={error} loading={loading} />
          </div>
          <Switch>
            <Route path={`${match.path}/new`} component={NewBookPage} />
            <Route path={`${match.path}/:id`} component={BookPage} />
          </Switch>
        </div>
      </Container>
    );
  }
}
const errorSelector = createErrorSelector(['LOAD_BOOKS', 'LOAD_COLORS']);
const loadingSelector = createLoadingSelector(['LOAD_BOOKS', 'LOAD_COLORS']);
function mapStateToProps(state, ownProps) {
  return {
    books: state.books,
    match: ownProps.match,
    error: errorSelector(state),
    loading: loadingSelector(state)
  };
}

BooksPage.propTypes = {
  books: PropTypes.array,
  match: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
};

export default connect(mapStateToProps)(BooksPage);