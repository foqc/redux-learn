import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

const MenuLinkSB = ({ label, icon, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            let active = match ? 'active' : '';
            return (
                <li className={active}>
                    <Link className={active} to={to} >
                        <i className="material-icons">{icon}</i>
                        <span>{label}</span>
                    </Link>
                </li>
            );
        }}
        />
    );
};

MenuLinkSB.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.string,
    activeOnlyWhenExact: PropTypes.bool
};

export default MenuLinkSB;