import React from 'react';
import Logo from './Images/focusLogo.png';

const welcome = () => {
    return (
        <div className="Welcome">
            <h1>My HR System V 0.0</h1>
            <p>A version used to practice</p>
            <img src={Logo} alt="focus" width="420" height="100"></img>
        </div>
    )
};

export default welcome;
