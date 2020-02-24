import React from 'react';
import './Employee.css';

const employee = () => {
    return (
        <div className="Employee">
            <p>First Name</p>
            <input type="text"></input>
            <p>Midle Name</p>
            <input type="text"></input>
            <p>Last Name</p>
            <input type="text"></input>
            <p>DUI</p>
            <input type="text"></input>
        </div>
    )
};

export default employee;