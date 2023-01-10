import { useState } from "react"

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (feedback) => {
    switch (feedback) {
      case "good":
        return () => setGood(good+1);
      case "neutral":
        return () => setNeutral(neutral+1);
      case "bad":
        return () => setBad(bad+1);
      default:
        break;
    }
  }

  const Button = ({name}) => <button onClick={handleClick(name)}>{name}</button>

  const StatisticLine = ({name,value}) => <tr width="100"><td>{name}</td><td>{value%1===0?value:value.toFixed(1)} {name==="positive"?`%`:null}</td></tr>
  const Statistics = () =>
    <>
      <h1>statistics</h1>
      {good || neutral || bad ?
      <table>
        <tbody>
          <StatisticLine name="good" value={good} />
          <StatisticLine name="neutral" value={neutral} />
          <StatisticLine name="bad" value={bad} />
          <StatisticLine name="all" value={good+neutral+bad} />
          <StatisticLine name="average" value={(good + neutral * 0 + bad* -1)/(good+neutral+bad)} />
          <StatisticLine name="positive" value={(good/(good+neutral+bad)) * 100} />
        </tbody>
      </table>
      :
      "No feedback given"}
    </>




  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" />
      <Button name="neutral" />
      <Button name="bad" />
      <Statistics />
    </div>
  )
}

export default App