import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand href="/" className="mr-auto">
            Bootstrap Template
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Click Bait</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/krasovsky22/time-waster">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    )
  }
}

export default Header
