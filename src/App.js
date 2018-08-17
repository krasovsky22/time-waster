import React, { Component, Fragment } from 'react'
import { Jumbotron } from 'reactstrap'
import Footer from './Components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './Components/Header'
import Body from './Components/Body'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Body />
        <Footer />
      </Fragment>
    )
  }
}

export default App
