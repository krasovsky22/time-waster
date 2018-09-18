import React from 'react'
import { Jumbotron } from 'reactstrap'
import CKEditorComponent from './CKEditor/CKEditorComponent'
import TreeView from 'react-treeviewer'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

const data = [
  {
    id: 1,
    text: 'Root',
    //icon: <FontAwesomeIcon icon="stroopwafel" />,
    expanded: false,
    children: [
      {
        id: 3,
        selected: true,
        checked: false,
        expanded: false,
        text: 'Child 1',
        icon: <FontAwesomeIcon icon="stroopwafel" size="2x" spin={true} style={{ color: 'red' }} />,
        children: [{ id: 5, text: 'Grandchild 1', expanded: false }],
      },
    ],
  },
]

class Body extends React.Component {
  render() {
    return (
      <main role="main" className="container">
        <Jumbotron>
          <TreeView data={data} />
        </Jumbotron>
      </main>
    )
  }
}

export default Body
