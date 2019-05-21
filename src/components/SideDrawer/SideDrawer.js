import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/" ><a>HOME</a></Link>
        </li>
        <li>
          <Link to="/Music"><a>MUSIC</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
