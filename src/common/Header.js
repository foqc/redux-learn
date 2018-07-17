import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';
import ToggleButton from '../common/DrawerToggleButton';
import '../header.css';

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
        <header className="toolbar">
          <nav className="toolbar_navigation">
            <div><ToggleButton /></div>
            <div className="toolbar_logo"><NavLink to="/home" activeClassName="active">REDUX LEARN</NavLink></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
              <ul>
                <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/books" activeClassName="active">Books</NavLink></li>
                <li><a href="/logout" onClick={this.logOut}>Log out</a></li>
              </ul>
            </div>
          </nav>
        </header>
      );
    } else {
      return (
        <header className="toolbar">
          <nav className="toolbar_navigation">
            <div><ToggleButton /></div>
            <div className="toolbar_logo"><NavLink to="/home" activeClassName="active">REDUX LEARN</NavLink></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
              <ul>
                <li><NavLink to="/home" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/books" activeClassName="active">Books</NavLink></li>
                <li><NavLink to="/login" activeClassName="active">Log in</NavLink></li>
              </ul>
            </div>
          </nav>
        </header>
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