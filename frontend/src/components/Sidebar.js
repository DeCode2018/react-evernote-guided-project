import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    let filteredNotes = this.props.notes.filter(note=> note.title.includes(this.props.searchTerm)||note.body.includes(this.props.searchTerm))

    return (
      <div className='master-detail-element sidebar'>
        {filteredNotes.map(note => <NoteList note={note} key={note.id} selectNote={this.props.selectNote}/>)}
        <button onClick={this.props.handleNew}>New</button>
      </div>
    );
  }
}

export default Sidebar;
