import './App.css';
import { useState, useEffect } from 'react';
import Time from './Time';
import Today from './Today';
import DaysOfWeek from './Days';
import Progress from './Progress';

function App() {
  const [time, setTime] = useState(new Date());
  const hour = time.getHours();
  const minute = time.getMinutes();
  const separator = time.getSeconds() % 2 == 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <DaysOfWeek today={time} />
      <Time hour={hour} minute={minute} separator={separator} />
      <Progress time={time} />
      <Today today={time} />
    </div>
  );
}

export default App;
