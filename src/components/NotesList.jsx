import React from 'react'
import { useNotes } from '../context/NotesContext'
import NoteItem from './NoteItem';

const NotesList = () => {

  const {notes} = useNotes();

  return (
    <div>
      {notes.length === 0 ? (<p className='text-center'>Not notes are listed yet! </p>) : (
        notes.map((note)=> <NoteItem key={note.id} note={note}/>)
      )}
    </div>
  )
}

export default NotesList
