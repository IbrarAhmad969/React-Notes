import React, { useState } from 'react'
import {NotesContext} from './NotesContext'

const NotesProvider = ({children}) => { // this component will include all the functions/methods
  
  const[notes, setNotes] = useState([])

  const addNote = (text)=>{
    setNotes([...notes, {id: Date.now(), text}]);
  }
  const deleteNote = (id)=>{
    setNotes(notes.filter((note) => note.id!==id));
  }

  const updateNote = (id, newNote)=>{
    setNotes(notes.map((note) => (note.id === id ? { ...note, text: newNote } : note)));
  }

  return (
    <NotesContext.Provider value = {{notes, addNote, deleteNote, updateNote}} >
      {children}
    </NotesContext.Provider>
  )
}

export default NotesProvider
