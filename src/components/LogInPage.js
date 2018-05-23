import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as sessionActions from '../actions/sessionActions';

class LogInPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { credentials: { email: 'foqc@email.com', password: 'mypassword' } };
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onChange = e =>
        this.setState({
            credentials: { ...this.state.credentials, [e.target.name]: e.target.value }
        });

    onSave(event) {
        event.preventDefault();
        this.props.actions.loginUser(this.state.credentials);
    }

    render() {
        return (
            <div className="">
                <div className="row" >
                    <div className="col-md-4" style={{ margin: "0 auto" }}>
                        <form>
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