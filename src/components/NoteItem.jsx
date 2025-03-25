import React, { useState, useRef } from "react";
import { FiEdit, FiTrash2, FiSave } from "react-icons/fi";
import { useNotes } from "../context/NotesContext";

const NoteItem = ({ note }) => {
  const { updateNote, deleteNote } = useNotes();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const inputRef = useRef(null); // Reference for the input field

  const handleSave = () => {
    if (editedText.trim() === "") {
      alert("Note cannot be empty!"); // Prevent saving empty notes
      return;
    }
    updateNote(note.id, editedText); // Update only this note
    setIsEditing(false);
  };

  const handleBlur = () => {
    if (editedText.trim() !== "") {
      handleSave();
    } else {
      setEditedText(note.text); // Reset to original text if empty
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-center bg-amber-100 mb-2 p-5 rounded-2xl shadow-md h-20">
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={editedText} // Each note has its own text state
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleBlur} // Trigger when clicking outside
          className="border border-gray-500 rounded h-full px-2.5 w-full outline-none"
          autoFocus
        />
      ) : (
        <p className="text-black w-full">{note.text}</p>
      )}

      <div className="flex gap-3">
        {isEditing ? (
          <button onClick={handleSave} className="text-green-500 hover:text-green-700">
            <FiSave size={20} />
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-blue-500 hover:text-blue-700">
            <FiEdit size={20} />
          </button>
        )}

        <button onClick={() => deleteNote(note.id)} className="text-red-500 hover:text-red-700">
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
