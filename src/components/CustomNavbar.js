import React from 'react'

const Nav = () => (
  <nav className="navbar navbar-dark bg-pink justify-content-start">
    <a className="nav-link active text-white border-bottom" href="/">Active</a>
    <a className="nav-link text-white" href="/">Link</a>
    <a className="nav-link text-white" href="/">Link</a>
    <a className="nav-link disabled" href="/">Disabled</a>
  </nav>
)

export default Nav
