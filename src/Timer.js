import React from 'react';
const { useEffect, useState } = React;
export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <h2>{seconds}</h2>
  );
};