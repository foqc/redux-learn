import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';

class Header extends React.Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    if (this.props.logged_in) {
      return (
        <nav>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
          {" | "}
          <NavLink to="/books" activeClassName="active">Books</NavLink>
          {" | "}
          <a href="/logout" onClick={this.logOut}>Log out</a>
        </nav>
      );
    } else {
      return (
        <nav>
          <NavLink to="/home" activeClassName="active">Home</NavLink>
          {" | "}
          <NavLink to="/books" activeClassName="active">Books</NavLink>
          {" | "}
          <NavLink to="/login" activeClassName="active">Log in</NavLink>
        </nav>
      );
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired,
  logged_in: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return { logged_in: state.session };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);