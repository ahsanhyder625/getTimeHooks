import React ,{useState} from 'react'
import './index.css';

function App() {

let time = new Date().toLocaleTimeString()
const [ctime, settime] = useState(time)

const UpdateTime= () =>{
  time = new Date().toLocaleTimeString()
  settime(time)
}

setInterval(UpdateTime,1000)
  return (
    <div className="App">
      <h1>{ctime}</h1>
      {/* <button onClick={handleClick}>Get Time</button> */}
    </div>
  );
}

export default App;
