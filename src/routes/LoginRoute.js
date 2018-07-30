import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const LoginRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                (isAuthenticated && { ...rest }.path === "/login") ? (<Redirect to="/" />) : (<Component {...props} />)
            }
        />);
};

LoginRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.session
    };
}

export default connect(mapStateToProps)(LoginRoute);