import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

const CreateArea = ({ addNote }) => {
  const [newNote, setNewNote] = React.useState({ title: "", content: "" });

  const [isExpanded, setExpanded] = React.useState(false);

  return (
    <div>
      <form className="input-area">
        {isExpanded && <input name="title" placeholder="Title" onChange={(e) => setNewNote({ ...newNote, title: e.target.value })} value={newNote.title} />}
        <textarea
          required
          name="content"
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          onClick={() => setExpanded(true)}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={newNote.content}
        />
        {isExpanded && <Zoom in={isExpanded ? true : false}>
          <Fab
            onClick={(e) => {
              addNote(newNote);
              setNewNote({ title: "", content: "" });
              e.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>}
      </form>
    </div>
  );
};

export default CreateArea;
