import React from "react";
import { MDBContainer, MDBInput, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';

const FormPage = () => {
  return (
    <div className="login">
      <form>
        <p className="h5 text-center">Sign in</p>
        <div className="grey-text">
          <MDBInput
            label="Type your email"
            icon="envelope"
            group
            type="email"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="Type your password"
            icon="lock"
            group
            type="password"
            validate
          />
        </div>
        <div className="text-center">
          <MDBBtn><Link to="/Event"><a>SPORTS</a></Link></MDBBtn>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
