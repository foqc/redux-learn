import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../src/common/Header';
import UserRoute from '../../src/routes/UserRoute';
import LoginRoute from '../../src/routes/LoginRoute';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../src/components/home/HomePage';
import BooksPage from '../../src/components/books/BooksPage';
import DashboardPage from '../../src/components/dashboard/DashboardPage';
import LogInPage from '../../src/components/LogInPage';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Loader loaded={this.props.loaded}>
          <Header />
          <div className="container-fluid" style={{ marginTop: '70px' }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <UserRoute path="/books" component={BooksPage} />
              <UserRoute path="/dashboard" component={DashboardPage} />
              <LoginRoute path="/login" component={LogInPage} />
            </Switch>
          </div>
        </Loader>
      </Fragment>
    );
  }
}

App.propTypes = {
  loaded: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loaded: state.user.loaded
  };
}

export default withRouter(connect(mapStateToProps)(App));