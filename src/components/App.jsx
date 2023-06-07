import React, {useState} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  //array to store data
  const [notes, setNotes] = useState([]);


  //state passed from createArea 
  function addNote(newNote) {
    setNotes(prevNotes => {
      //Adding it to array
      return [...prevNotes, newNote];
    });
  }


  //state passed from note.jsx 
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header/>
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer/>
    </>
  );
}

export default App;