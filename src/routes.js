import React from 'react';
import { Route } from 'react-router-dom';
import App from '../src/components/App';
import PropTypes from "prop-types";

class Routes extends React.Component {
    render() {
        const { location } = this.props;
        return (
            <Route location={location} path="/" component={App} />
        );
    }
}

Routes.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};
export default Routes;