import React from 'react'
import { Jumbotron } from 'reactstrap'
import CKEditorComponent from './CKEditor/CKEditorComponent'

class Body extends React.Component {
  render() {
    return (
      <main role="main" className="container">
        <Jumbotron>
          <CKEditorComponent />
        </Jumbotron>
      </main>
    )
  }
}

export default Body
