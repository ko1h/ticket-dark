import React from 'react';
import { Link } from 'react-router-dom';
import  Button from 'react-bootstrap/Button';


function Header(){
  return(
    <div className= "header">
      <h1>header</h1>
      <Button variant="outline-primary">Primary</Button>

    </div>
  )
}

export default Header
