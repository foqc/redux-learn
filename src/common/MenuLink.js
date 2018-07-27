import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'nav-item active' : 'nav-item';
            return (
                <li className={active}>
                    <Link className="nav-link" to={to} >{label}</Link>
                </li>
            );
        }}
        />
    );
};

MenuLink.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    activeOnlyWhenExact: PropTypes.bool
};

export default MenuLink;