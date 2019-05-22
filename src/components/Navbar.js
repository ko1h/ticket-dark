import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { Link } from 'react-router-dom';

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand >
                <strong><Link to="/"><a>HOME</a></Link></strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <Link to="/Event"><a>EVENT</a></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/"><a>CONCERT</a></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/Media"><a>SPORT</a></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/"><a>ART & THEATER</a></Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/"><a>LOCATION</a></Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;
