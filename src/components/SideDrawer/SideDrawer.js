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
      <DrawerToggleButton />
        <li>
          <span><Link to="/"><a>HOME</a></Link></span>
        </li>
        <li>
          <Link to="/Event"><a>EVENT</a></Link>
        </li>
        <li>
          <Link to="/"><a>CONCERT</a></Link>
        </li>
        <li>
          <Link to="/Media"><a>SPORT</a></Link>
        </li>
        <li>
          <Link to="/"><a>ART & THEATER</a></Link>
        </li>
        <li>
          <Link to="/"><a>LOCATION</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
