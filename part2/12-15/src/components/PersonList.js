const PersonList = ({personsToShow, handleDelete}) => 
<>
    {personsToShow.map(((person,id) => <li key={id}>{person.name} {person.number} <button onClick={()=>handleDelete(person)}>delete</button></li>))}
</>

export default PersonList