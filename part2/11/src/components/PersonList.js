const PersonList = ({personsToShow}) => <>{personsToShow.map(((person,id) => <li key={id}>{person.name} {person.number}</li>))}</>

export default PersonList