import React ,{useState} from 'react'
import './index.css';

function App() {

const [time, settime] = useState('00:00:00')

const handleClick = () =>{
  let date = new Date()
  settime(date.toLocaleTimeString())
}

  return (
    <div className="App">
      <h1>{time}</h1>
      <button onClick={handleClick}>Get Time</button>
    </div>
  );
}

export default App;
