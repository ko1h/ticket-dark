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
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Header
