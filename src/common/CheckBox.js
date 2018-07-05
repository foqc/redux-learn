import React from 'react';
import PropTypes from 'prop-types';

class CheckBox extends React.Component {
    render() {
        return (
            <div className={this.props.styleClass} >
                <input
                    className="form-check-input"
                    type="checkbox"
                    name={this.props.item.name}
                    value={this.props.item._id}
                    checked={this.props.item.checked}
                    onChange={this.props.handleChange} />
                <label
                    className="form-check-label"
                    htmlFor={this.props.item.name}>{this.props.item.name}</label>
            </div>
        );
    }
}

CheckBox.propTypes = {
    item: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    styleClass: PropTypes.string.isRequired,
};

export default CheckBox;