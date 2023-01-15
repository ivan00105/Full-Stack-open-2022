import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import PersonList from './components/PersonList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhoneNum(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value)
  }

  const personsToShow = !filterValue ? persons : persons.filter(person => person.name.includes(filterValue))

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name:newName,
      number:phoneNum
    }
    if(persons.find(person => person.name === newName))
      alert(`${newName} is already added to phonebook`)
    else
      setPersons(persons.concat(newPerson))

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
        <PersonList personsToShow={personsToShow} />
      </ul>
    </div>
  )
}

export default App