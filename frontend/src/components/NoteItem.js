import React from 'react';
import TextTruncate from 'react-text-truncate'

const NoteItem = (props) => {


  return (
  <li onClick={()=>props.selectNote(props.note)} >
    <h2>{props.note.title}</h2>
    <p></p>
    <TextTruncate
    line={1}
    truncateText="…"
    text={props.note.body}

/>
  </li>
);
}

export default NoteItem;
