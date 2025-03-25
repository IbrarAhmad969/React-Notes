import React from "react";
import { useForm } from "react-hook-form";
import { useNotes } from "../context/NotesContext";

const AddNoteForm = () => {
  const { addNote } = useNotes();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    if (!data.note.trim()) {
      return; 
    }
    addNote(data.note);
    reset();
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-10 px-4">
      <form 
        className="flex flex-col sm:flex-row gap-3.5 w-full max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full sm:w-[400px] bg-white border rounded-2xl border-purple-600 px-4 py-2 text-lg outline-none focus:ring-2 focus:ring-purple-400"
          {...register("note", { required: "Note cannot be empty" })}
          placeholder="Enter Name"
        />

        <button
          type="submit"
          className="bg-purple-500 text-white px-6 py-2 rounded-2xl font-bold hover:bg-purple-900 transition"
        >
          Save
        </button>
      </form>

      {errors.note && <p className="text-red-500 mt-2 text-sm">{errors.note.message}</p>}
    </div>
  );
};

export default AddNoteForm;
