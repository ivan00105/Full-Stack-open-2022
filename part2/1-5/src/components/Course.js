const Course = ({course}) =>
    <>
        <h1>{course.name}</h1>
        {course.parts.map((part) => <p key={part.id}>{part.name} {part.exercises}</p>)}
        <h3>total of {course.parts.reduce((sum,part)=> sum + part.exercises, 0)} exercises</h3>
    </>;

export default Course