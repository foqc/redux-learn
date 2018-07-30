import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';
import MenuLink from '../common/MenuLink';
import { Collapse, NavbarToggler } from 'reactstrap';
import '../header.css';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false
    };
    this.logOut = this.logOut.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  onClickHandle = e =>
    this.setState({
      isOpen: !this.state.isOpen
    });


  render() {

    if (this.props.logged_in) {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
          <NavLink to="/" className="navbar-brand" >REDUX LEARN</NavLink>
          <NavbarToggler onClick={this.onClickHandle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="mr-auto">{}</div>
            <ul className="navbar-nav">
              <MenuLink label="Home" to="/" activeOnlyWhenExact />
              <MenuLink label="Books" to="/books" />
              <li className="nav-item"><a className="nav-link" href="/logout" onClick={this.logOut}>Log out</a></li>
            </ul>
          </Collapse>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink to="/" className="navbar-brand" >REDUX LEARN</NavLink>
          <NavbarToggler onClick={this.onClickHandle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <div className="mr-auto">{}</div>
            <ul className="navbar-nav">
              <MenuLink label="Home" to="/" activeOnlyWhenExact />
              <MenuLink label="Books" to="/books" />
              <MenuLink label="Log in" to="/login" />
            </ul>
          </Collapse>
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