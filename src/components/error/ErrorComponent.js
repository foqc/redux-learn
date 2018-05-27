import React from 'react';
import PropTypes from "prop-types";
import { ClipLoader } from 'react-spinners';

function withErrorHandling(WrappedComponent) {
    return function wrapped({ loading, showError, children }) {
        return (
            <WrappedComponent>
                {(loading && <div style={{ textAlign: 'center' }}>
                    <ClipLoader size={25} color={'#56ddc3'} loading /></div>)
                    || (showError && <div className="alert alert-danger">{showError.message}</div>)}
                {!loading && !showError && children}
            </WrappedComponent>
        );
    };
}

const LoadErrorHandler = withErrorHandling(({ children }) => <div>{children}</div>);

export default LoadErrorHandler;