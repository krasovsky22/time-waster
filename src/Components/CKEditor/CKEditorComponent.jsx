import React, { Component } from 'react'

import AmbryEditor from './AmbryEditor'

class CKEditorComponent extends Component {
  ambryEditor
  componentDidMount() {
    this.initializeEditor()
  }
  initializeEditor() {
    AmbryEditor.create(document.querySelector('#test-ckeditor'))
      .then(editor => {
        console.log('Editor was initialized', editor)
        this.ambryEditor = editor
      })
      .catch(error => {
        console.error(error.stack)
      })
  }

  clickButton = () => {
    this.ambryEditor.setData('<i>Hello World</i>')
  }

  clickGetButton = () => {
    console.log(this.ambryEditor.getData())
  }

  render() {
    return (
      <>
        <div id="test-ckeditor" />
        <button onClick={this.clickButton}>Click</button>
        <button onClick={this.clickGetButton}>getData</button>
      </>
    )
  }
}

export default CKEditorComponent
