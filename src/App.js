import React, { Component } from 'react';
import './App.css';
import Welcome from './Forms/Welcome.js';
import Employee from './Forms/Employee.js';
import Vacations from './Forms/Vacations.js';
import Permissions from './Forms/Permissions.js';

class App extends Component {
  
state = {
    showEmployee: false,
    showVacations: false,
    showPermissions: false
  };
 
  toggleEmployeeHandler = () => {
    const toShow = this.state.showEmployee;
    this.setState( { showEmployee: !toShow } );
  }
  toggleVacationsHandler = () => {
    const toShow = this.state.showVacations;
    this.setState( { showVacations: !toShow } );
  }
  togglePermissionsHandler = () => {
    const toShow = this.state.showPermissions;
    this.setState( { showPermissions: !toShow } );
  }


  render() {
    const style = {
      backgroundColor: 'light gray',
      font: 'inherit',
      border: '1px solid gray',
      padding: '8px',
      cursor: 'pointer',
      align: 'center'
    };

    let employee = null;
    let vacations = null;
    let permissions = null;
    
    if ( this.state.showEmployee ) {
      employee = (
        <div>
          <Employee></Employee>
        </div>
      );
    } 
    
    if ( this.state.showVacations ) {
        vacations = (
          <div>
            <Vacations></Vacations>
          </div>
        );
    }

    if ( this.state.showPermissions) {
      permissions = (
        <div>
          <Permissions></Permissions>
        </div>
      );
  }

    return (
      
      <div className="App">
        <Welcome></Welcome>
        <button style={style} onClick={this.toggleEmployeeHandler}>Employee</button> {employee}
        <button style={style} onClick={this.toggleVacationsHandler}>Vacations</button> {vacations}
        <button style={style} onClick={this.togglePermissionsHandler}>Permissions</button> {permissions}
        
      </div>

    );
  }
}

export default App;
