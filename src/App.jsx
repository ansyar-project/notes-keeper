import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import notes_default from "./notes";
import CreateArea from "./components/CreateArea";
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [notes, setNotes] = React.useState(notes_default);
  function addNote(newNote) {
    newNote.key = uuidv4();
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(key) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.key !== key);
    });
  }
  return (
    <>
      <div className="page">
        <Header />
        <main>
          <CreateArea addNote={addNote} />
          <div className="notes-container">
            {notes.map((note) => (
              <Note key={note.key} title={note.title} content={note.content} deleteNote={deleteNote} key_note={note.key} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
