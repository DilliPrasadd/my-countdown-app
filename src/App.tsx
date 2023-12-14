import React, { useState } from 'react';
import Countdown from './Countdown';
import '../src/App.css';
const App: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0)
  const handleSeconds = (event : any) => {
    setSeconds(event.target.value)
  }
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <input type="number" onChange={(e) => (e.target.value)}/>
      <button onClick={handleSeconds}>Set Time</button>
      <hr/>
      <div className='Timer'>
        <Countdown duration={seconds} /> 
      </div>
    </div>
  );
};

export default App;
