import React from 'react';
import PropTypes from "prop-types";
import '../../style.css';

const HobbyList = ({ colors }) => {
    return (
        <div>
            <h5>Colors</h5>
            <ul>
                {colors.map(color => (
                    <div key={color._id}>
                        <div className="my-colors" style={{ backgroundColor: color.hex }}>&nbsp;</div>
                        <li key={color._id}>{color.name}</li>
                    </div>
                ))}
            </ul>
        </div>
    );
};

HobbyList.propTypes = {
    colors: PropTypes.array.isRequired
};

export default HobbyList;