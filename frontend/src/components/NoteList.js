import React from 'react';
import NoteItem from './NoteItem';


const NoteList = (props) => {
  return (
    <ul>
      {/* Render list of notes here... */}
      <NoteItem note={props.note} selectNote={props.selectNote}/>

    </ul>
  );
}

export default NoteList;
