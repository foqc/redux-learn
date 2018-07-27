import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from '../actions/sessionActions';
import MenuLink from '../common/MenuLink';
import ToggleButton from '../common/DrawerToggleButton';
import '../header.css';

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false
    };
    this.logOut = this.logOut.bind(this);
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
    let con = 'collapse navbar-collapse';
    if (this.state.isOpen) {
      con = +' collapsing show';
    }

    if (this.props.logged_in) {
      return (
        <header className="toolbar">
          <nav className="toolbar_navigation">
            <div><ToggleButton /></div>
            <div className="toolbar_logo"><NavLink to="/" activeClassName="active">REDUX LEARN</NavLink></div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
              <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/books" activeClassName="active">Books</NavLink></li>
                <li><a href="/logout" onClick={this.logOut}>Log out</a></li>
              </ul>
            </div>
          </nav>
        </header>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <NavLink to="/" className="navbar-brand" >REDUX LEARN</NavLink>
          <button onClick={this.onClickHandle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">{}</span>
          </button>
          <div className={con} id="navbarSupportedContent">
            <div className="mr-auto">{}</div>
            <ul className="navbar-nav">
              <MenuLink label="Home" to="/" activeOnlyWhenExact />
              <MenuLink label="Books" to="/books" />
              <MenuLink label="Log in" to="/login" />
            </ul>
          </div>
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