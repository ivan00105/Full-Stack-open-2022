import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import PersonList from './components/PersonList'
import noteService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(()=>{
    noteService
      .getAll()
      .then(data => setPersons(data))
  },[])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhoneNum(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value)
  }

  const handleDelete = (person) => {
    console.log(person.id)
    if(window.confirm(`Delete ${person.name}?`))
      noteService
        .del(person.id)
        .then(res=> noteService.getAll().then(res=>setPersons(res)))
        .catch(res=>console.log(`can't delete`))
  }

  const personsToShow = !filterValue ? persons : persons.filter(person => person.name.includes(filterValue))

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name:newName,
      number:phoneNum
    }
    
    if(persons.find(person => person.name === newName)){
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
        noteService
          .update(persons[persons.findIndex(person => person.name === newName)].id, newPerson)
          .then(res => noteService.getAll().then(res=>setPersons(res)))
          .catch(res => console.log("can't update"))
    }
    else{
      noteService
        .create(newPerson)
        .then(res=>{
          setPersons(persons.concat(newPerson))  
        })
        .catch(res=>console.log("can't add"))
    }

      setNewName('')
      setPhoneNum('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameChange={handleNameChange}
        phoneNum={phoneNum}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <ul>
        <PersonList handleDelete={handleDelete} personsToShow={personsToShow} />
      </ul>
    </div>
  )
}

export default App