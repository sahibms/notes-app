import NoteItem from "./NoteItem"

function NoteList({notes,edit,Dlt,toggleImportent,toggleCompleted}) {
    return(
        <div>
            {notes.map((note)=>(
                <NoteItem
                key={note.id}
                note={note}
                edit={edit}
                Dlt={Dlt}
                toggleImportent={toggleImportent}
                toggleCompleted={toggleCompleted}
                />
            ))}
        </div>
    )
}
export default NoteList;