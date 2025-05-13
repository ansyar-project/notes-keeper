import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ key_note, title, content, deleteNote }) => {
  return (
    <div className="note-card">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => deleteNote(key_note)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
