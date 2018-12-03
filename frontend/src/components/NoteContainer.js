import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(){
    super()
    this.state = {
      sideNotes: [],
      currentNote: {},
      searchTerm: "",
      currentView: "",
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/api/v1/users/1")
      .then(res => res.json())
        .then(data => this.setState({sideNotes: data.notes}))
  }

  handleSubmit = (note)=> {
    this.setState({
      currentNote: note
    })
    fetch(`http://localhost:3000/api/v1/notes/${note.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: note.id,
          title:note.title,
          body:note.body
        }
        )
      })
  }

  handleCancel = (note) =>{
    //cancel button should cancel changes to note and show original note before any changes.
  this.setState({
    currentNote: note
  })


  }

  selectNote = (note) =>{
    this.setState({
      currentNote: note,
      currentView: `noteViewer`
    })
  }

  handleEditButton = (note) =>{
    this.setState({
      currentView: `noteEditor`
    })
  }

  handleChange = (event) =>{

    this.setState({
      [event.target.name]: event.target.value

    })
  }


  handleNew = () =>{
  let note = {title: "default",
              body: "placeholder"}

    fetch(`http://localhost:3000/api/v1/notes`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title:note.title,
          body:note.body,
          user_id: 1
        }
        )
      }).then(res=>res.json()).then(data=>this.setState({
        sideNotes: [...this.state.sideNotes,data]
      }))

  }

  searchForNote = (event) =>{
    this.setState({
      searchTerm: event.target.value
    })
  }

  


  render() {

    return (
      <Fragment>
        <Search searchForNote={this.searchForNote}/>
        <div className='container'>
          <Sidebar notes={this.state.sideNotes} selectNote={this.selectNote} handleNew={this.handleNew} searchTerm={this.state.searchTerm} />
          <Content currentNote={this.state.currentNote} currentView={this.state.currentView} handleEditButton={this.handleEditButton}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
