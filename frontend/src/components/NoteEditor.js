import React, { Component } from 'react';

class NoteEditor extends Component {

  constructor(props){
    super(props)
      this.state={
        title: this.props.currentNote.title,
        body: this.props.currentNote.body
      }

  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) =>{
  event.preventDefault()
    let newNote = this.props.currentNote
    newNote.title = this.state.title
    newNote.body = this.state.body
    this.props.handleSubmit(newNote)
  }

  handleCancel = (event) =>{
    //cancel button should cancel changes to note and show original note before any changes.
    event.preventDefault()
      let originalNote = this.props.currentNote
      originalNote.title = this.state.title
      originalNote.body = this.state.body
      this.props.handleCancel(originalNote)

  }

  render() {

    return (

      <form className="note-editor"  onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="title"
        onChange={event => this.handleChange(event)}
        value = {this.state.title} />
        <textarea name="body"
        onChange={event => this.handleChange(event)}
        value = {this.state.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={event=>this.props.handleCancel(event)}>Cancel</button>
          
        </div>
      </form>
    );
  }
}

export default NoteEditor;
