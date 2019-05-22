import React from 'react'

const Login = () => (
  <form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" className="form-text text-muted">
      </small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>
    <div className="form-check custom-control custom-checkbox">
      <input type="checkbox" className="form-check-input custom-control-input" id="formCustomCheck1"/>
      <label className="form-check-label custom-control-label" htmlFor="formCustomCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-pink">
      Submit
    </button>
  </form>
)

export default Login
