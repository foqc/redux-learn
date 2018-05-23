import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ name, label, onChange, placeholder, value, styleClass, isTextArea, type }) => {
    if (!isTextArea) {
        return (
            <div className={styleClass}>
                <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange} />
            </div>
        );
    }
    else {
        return (
            <div className={styleClass}>
                <label htmlFor={name}>{label}</label>
                <textarea
                    type={type}
                    name={name}
                    className="form-control"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows="3" />
            </div>
        );
    }
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    styleClass: PropTypes.string.isRequired,
    isTextArea: PropTypes.bool
};

export default TextInput;