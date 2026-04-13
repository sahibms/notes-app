function NoteInput({text,setText,Add,editId}) {
    return(
        <div>
            <textarea
            value={text}
            onChange={(e)=>setText(e.target.value)}
            onKeyDown={(e)=>{if(e.key === "Enter") {e.preventDefault();Add();}}}
            placeholder="Enter Note">   
             </textarea>
            <br></br>
            <button onClick={Add}>{editId !== null ? "Update" :"Add"}</button>
        </div>
    )
}
export default NoteInput;