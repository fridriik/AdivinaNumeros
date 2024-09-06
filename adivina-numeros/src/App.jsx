import { useState } from 'react';
import './App.css';
import CounterButton from './CounterButton';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <>
      <h1>Contador básico</h1>
      <div className="card">
        <div className='count'>{count}</div>
        <div className='controlButtons'>
          <CounterButton onClickAction={increment} label="+" />
          <CounterButton onClickAction={decrement} label="-" />
        </div>
      </div>
    </>
  );
}

export default App;