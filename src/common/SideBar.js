import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import MenuLinkSB from '../common/MenuLinkSB';
import img1 from '../assets/images/user.png';
import '../assets/css/admin-theme.css';

class SideBar extends React.Component {

    render() {
        const { user } = this.props;
        const val = this.props.isOpenSB ? 'sidebar sidebar-hide' : 'sidebar sidebar-show';
        return (
            <Fragment>
                {/* Left Sidebar */}
                <aside id="leftsidebar" className={val} >
                    {/* User Info */}
                    <div className="user-info">
                        <div className="image">
                            <img src={img1} width="48" height="48" alt="User" />
                        </div>
                        <div className="info-container">
                            <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{user.username}</div>
                            <div className="email">{user.email}</div>
                        </div>
                    </div>
                    {/* #User Info */}
                    {/* Menu */}
                    <div className="menu">
                        <ul className="list">
                            <li className="header">MAIN NAVIGATION</li>
                            <MenuLinkSB icon="home" label="Dashboard" to="/dashboard" activeOnlyWhenExact />
                            <MenuLinkSB icon="library_books" label="My Books" to="/books" />
                            <MenuLinkSB icon="layers" label="Portada" to="/sliders" />
                            <MenuLinkSB icon="update" label="Changelogs" to="/changelogs" />
                            <MenuLinkSB icon="layers" label="Helper Classes" to="/helperclasses" />
                            <MenuLinkSB icon="update" label="Changelogs" to="/changelogs" />
                            <li className="header">LABELS</li>
                            <li>
                                <a>
                                    <i className="material-icons col-red">donut_large</i>
                                    <span>Important</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="material-icons col-amber">donut_large</i>
                                    <span>Warning</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <i className="material-icons col-light-blue">donut_large</i>
                                    <span>Information</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* #Menu */}
                    {/* Footer */}
                    <div className="legal">
                        <div className="copyright">
                            &copy; 2018 - 2019 <a>AdminBSB - Material Design</a>.
                        </div>
                        <div className="version">
                            <b>Version: </b> 1.0.5
                        </div>
                    </div>
                    {/* #Footer */}
                </aside>
            </Fragment>
        );
    }
}

SideBar.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired
    }).isRequired,
    isOpenSB: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default withRouter(connect(mapStateToProps)(SideBar));
