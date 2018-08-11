import React from 'react';
import PropTypes from 'prop-types';

function container(WrappedComponent) {
    return function wrapped({ mainHeader, secondHeader, infoHeader, children }) {
        return (
            <WrappedComponent>
                <section className="content">
                    <div className="block-header">
                        <h2>{mainHeader}</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="card">
                                <div className="header">
                                    <div className="row clearfix">
                                        <div className="col-xs-12 col-sm-6">
                                            <h2>{secondHeader}</h2>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 align-right">
                                            <div className="switch panel-switch-btn">
                                                <span className="m-r-10 font-12">{infoHeader}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="body">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </WrappedComponent>
        );
    };
}

const Container = container(({ children }) => children);

Container.propTypes = {
    mainHeader: PropTypes.string,
    secondHeader: PropTypes.string,
    infoHeader: PropTypes.string,
    children: PropTypes.element
};

export default Container;