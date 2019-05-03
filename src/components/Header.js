import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div className= "header">
      <h2>hello world</h2>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Header
