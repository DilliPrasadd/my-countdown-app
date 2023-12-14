import React, { useState, useRef } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import '../src/App.css';

interface CountdownProps {
  duration: number; 
}

const Countdown: React.FC<CountdownProps> = ({ duration }) => {
  const [key, setKey] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<any>(null);

  const resetTimer = () => {
    setKey((prevKey) => prevKey + 1);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
    if (timerRef.current) {
      timerRef.current.pauseTimer();
    }
  };

  const handleClear = () => {
    setIsPaused(false);
    resetTimer();
    if (timerRef.current) {
      timerRef.current.restartTimer();
    }
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      <CountdownCircleTimer
        key={key}
        isPlaying={!isPaused}
        duration={duration}
        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
        colorsTime={[7, 5, 2, 0]}
        onComplete={resetTimer}
        // ref={timerRef}
      >
        {/* {({ remainingTime }) => {formatTime(remainingTime)}} */}
        {({ remainingTime }) => (
          <div className="timer">
            <div className="text">{formatTime(remainingTime)}</div>
            <div className="text">Minutes</div>
            
          </div>
        )}
      </CountdownCircleTimer>

      <div style={{marginTop : '40px'}}>
        <button onClick={handlePause}>{isPaused ? 'Resume' : 'Pause'}</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Countdown;
