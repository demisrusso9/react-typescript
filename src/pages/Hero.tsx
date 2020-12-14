import { useState } from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

function Hero() {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [power, setPower] = useState('')
  const [displayData, setDisplayData] = useState(false)

  return (
    <div className="App">
      <Link to="/">{'<---'}</Link>
      <h1>Build a Hero</h1>
      
      <label htmlFor="">Name: </label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label htmlFor="">Age: </label>
      <input type="number" value={age} onChange={e => setAge(e.target.valueAsNumber)} />

      <label htmlFor="">Height: </label>
      <input type="number" value={height} onChange={e => setHeight(e.target.valueAsNumber)} />

      <label htmlFor="">Super Power: </label>
      <input type="text" value={power} onChange={e => setPower(e.target.value)} />

      <button onClick={e => setDisplayData(true)}>Click</button>

      <div>
        {displayData && (
          <div>
            <p>{name}</p>
            <p>{age}</p>
            <p>{height}</p>
            <p>{power}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
