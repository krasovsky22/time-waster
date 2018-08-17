import React, { Component, Fragment } from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
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
        <main role="main" className="container">
          <p>Main Body Here</p>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default App
