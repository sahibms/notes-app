import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import { useState,useEffect } from "react";
import "./App.css";

function App() {
  const[text,setText] = useState("");
  const[editId,setEditId] = useState(null);
  const[search,setSearch] = useState("");
  const[notes,setNotes] = useState(()=>{
    const data = localStorage.getItem("notes");
    return data ? JSON.parse(data) : []
  });
  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes));
  },[notes]);
  

  const Add = ()=>{
    if(!text.trim()) return;

    if(editId !== null) {
      const updatedNote = notes.map((note)=>
      note.id === editId ? {...note,text:text}:note
    );
    setEditId(null);
    setText("");
    setNotes(updatedNote);
    } else {
      const newNote = {
        id:Date.now(),
        text:text,
        importent:false,
        completed:false
      }
      setText("");
      setNotes([...notes,newNote]);
    }
  }

  const edit = (id)=>{
    const note = notes.find((n)=>n.id === id);
    setText(note.text);
    setEditId(id);
  }

  const Dlt = (id)=>{
    const newList = notes.filter((n)=>n.id !== id);
    setNotes(newList);

  }
  const toggleImportent = (id)=>{
    const updated = notes.map((note)=>
    note.id === id ? {...note,importent:!note.importent}
  : note
);
  setNotes(updated);
  }

  const toggleCompleted = (id)=>{
    const updated = notes.map((note)=>
    note.id === id ? {...note,completed:!note.completed}
  :note
);
setNotes(updated);
  }

  return(
    <div className="container">
      <div className="top-section">
      <h1 className="title">Notes App</h1>
      <NoteInput
      text={text}
      setText={setText}
      Add={Add}
      editId={editId}
      />
      <input className="search"

      type="text"
      placeholder="Search notes..."
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      />
      </div>
      <div className="notes-list">
      <NoteList
      notes={notes.filter(note=>note.text.toLowerCase().includes(search.toLowerCase()))}
      edit={edit}
      Dlt={Dlt}
      toggleImportent={toggleImportent}
      toggleCompleted={toggleCompleted}
      />
      </div>
      
    </div>
  )
}
export default App;
