import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';
import MenuLink from '../common/MenuLink';
import { Collapse, NavbarToggler } from 'reactstrap';
import SideBar from '../../src/common/SideBar';
import '../assets/css/header.css';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      isOpenSideBar: true,
    };
    this.logOut = this.logOut.bind(this);
    this.onClickHandle = this.onClickHandle.bind(this);
    this.onClickSideBar = this.onClickSideBar.bind(this);
  }

  logOut(event) {
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  onClickHandle = e =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  onClickSideBar = e =>
    this.setState({
      isOpenSideBar: !this.state.isOpenSideBar
    });


  render() {

    if (this.props.logged_in) {

      const val = this.state.isOpenSideBar ? 'none' : 'inline';
      return (
        <Fragment>
          <nav className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top">
            <NavbarToggler className="mytoggler" onClick={this.onClickSideBar} />
            <NavLink to="/" className="navbar-brand" >REDUX LEARN</NavLink>
            <NavbarToggler className="mytoggler2" onClick={this.onClickHandle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <div className="mr-auto">{}</div>
              <ul className="navbar-nav">
                <MenuLink label="Home" to="/" activeOnlyWhenExact />
                <MenuLink label="Books" to="/books" />
                <li className="nav-item"><a className="nav-link" href="/logout" onClick={this.logOut}>Log out</a></li>
              </ul>
            </Collapse>
          </nav>
          <SideBar isOpenSB={this.state.isOpenSideBar} />
          <div className="overlay" style={{ display: val }} onClick={this.onClickSideBar} role="button" tabIndex="0" >&nbsp;</div>
        </Fragment>
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
  return { logged_in: !!state.user.session };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));