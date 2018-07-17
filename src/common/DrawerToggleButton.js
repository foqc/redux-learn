import React from 'react';
import '../DrawerToggleButton.css';

const drawerToggleButton = props => {
    return (
        <button className="toggle_button">
            <div className="toggle_button_line" />
            <div className="toggle_button_line" />
            <div className="toggle_button_line" />
        </button>
    );
};

export default drawerToggleButton;