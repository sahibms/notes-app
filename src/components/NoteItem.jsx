function NoteItem({note,edit,Dlt,toggleImportent,toggleCompleted}) {
    return(
        <div className={`note ${note.importent ? "important" :""}`}>
            <p className={note.completed ? "completed" : ""}>{note.text}</p>
            <div className="note-buttons">
            <button className="edit-btn" onClick={()=>edit(note.id)}>Edit</button>
            <button className="dlt-btn" onClick={()=>Dlt(note.id)}>Delete</button>
            <button className="star-btn" onClick={()=>toggleImportent(note.id)}>{note.importent ?"⭐":"☆"}</button>
            <button className="check-btn" onClick={()=>toggleCompleted(note.id)}>{note.completed ?"☑️":"☐" }</button>
            </div>
        </div>
    )
}
export default NoteItem;