
import React from 'react';
import {bubble as Menu} from 'react-burger-menu';

class Sidebar extends React.Component {
  super(props) {
  }

  render() {
    return (
      <Menu>
        <h3>Need more data? </h3>
        <a className="menu-item" href="https://jnsmelinda.github.io/Earthquake_Tracker/">
        Earthquake Tracker - Project 1
        </a>
        <a className="menu-item" href="https://vent-tracker.herokuapp.com/">
        Air Quality Tracker - Project 2
        </a>
        <br></br>
        <a className="menu-item" href='/login'>
          <button className="btn btn-light btn-lg" onClick={this.logout}>
          Logout
          </button>
        </a>
        <a className="menu-item" href='/puppies'>
          <button className="btn btn-light btn-lg" >
          Puppies
          </button>
        </a>
      </Menu>
    );
  }
}


export default Sidebar;
