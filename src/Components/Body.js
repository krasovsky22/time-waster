import React from 'react'
import { Jumbotron } from 'reactstrap'

class Body extends React.Component {
  render() {
    return (
      <main role="main" className="container">
        <Jumbotron>
          <h1 className="display-3">Time was wasted here.</h1>
          <p className="lead">Nothing is here yet...</p>
          <hr className="my-2" />
          <p>This is empty too.</p>
        </Jumbotron>
      </main>
    )
  }
}

export default Body
