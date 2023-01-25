const Note = ({ note, toggleImportance, handleDelete }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className="note">
      {note.content} 
      <button onClick={() => handleDelete(note)}>delete</button>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note