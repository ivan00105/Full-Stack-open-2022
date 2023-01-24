const Form = (props) =>
    <form onSubmit={props.handleSubmit}>
        <div>name: <input value={props.newName} onChange={props.handleNameChange} /></div>
        <div>number: <input value={props.phoneNum} onChange={props.handlePhoneChange}  /></div>
        <div><button type="submit">add</button></div>
    </form>

export default Form