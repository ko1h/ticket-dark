import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <nav>
      <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <ul class="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/music">MUSIC</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Header
