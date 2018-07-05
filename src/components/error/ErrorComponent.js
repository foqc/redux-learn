import React from 'react';
import PropTypes from "prop-types";
import { ClipLoader } from 'react-spinners';

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function withErrorHandling(WrappedComponent) {
    return function wrapped({ loading, showError, children }) {
        return (
            <WrappedComponent>
                {(loading && <div style={{ textAlign: 'center' }}>
                    <ClipLoader size={25} color={'#56ddc3'} loading /></div>)
                    || (!isEmpty(showError) && showError && <div className="alert alert-danger">{showError.message}</div>)}
                {!loading && children}
            </WrappedComponent>
        );
    };
}

const LoadErrorHandler = withErrorHandling(({ children }) => children);

export default LoadErrorHandler;