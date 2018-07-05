import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Validator from 'validator';
import LoadErrorHandler from './error/ErrorComponent';
import * as sessionActions from '../actions/sessionActions';

class LogInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: { email: 'foqc@email.com', password: 'mypassword' },
            errors: {},
            loading:false
        };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange = e =>
        this.setState({
            credentials: { ...this.state.credentials, [e.target.name]: e.target.value }
        });

    onSave(event) {
        event.preventDefault();
        const errors = this.validate(this.state.credentials);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props.actions.loginUser(this.state.credentials)
                .catch(err =>
                    this.setState({ errors: err.response.data.errors, loading: false })
                );
        }
    }

    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    };

    render() {
        const { errors, loading } = this.state;
        return (
            <div className="">
                <div className="row" >
                    <div className="col-md-4" style={{ margin: "0 auto" }}>
                        <LoadErrorHandler showError={errors} loading={loading}>
                            <form>
                                {errors.global && (
                                    <div className="alert alert-danger">{errors.global}</div>
                                )}
                                <TextInput
                                    name="email"
                                    label="email"
                                    value={this.state.credentials.email}
                                    styleClass="form-group"
                                    onChange={this.onChange} />

                                <TextInput
                                    name="password"
                                    label="password"
                                    type="password"
                                    styleClass="form-group"
                                    value={this.state.credentials.password}
                                    onChange={this.onChange} />

                                <input
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={this.onSave} />
                                {" "}
                            </form>
                        </LoadErrorHandler>
                    </div>
                </div>
            </div>
        );
    }
}


LogInPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
}
export default connect(null, mapDispatchToProps)(LogInPage);