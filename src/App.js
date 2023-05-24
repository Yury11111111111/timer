import { useEffect, useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [date, setDate] = useState(0);
  const [dateNow, setDateNow] = useState(0);
  const [time, setTime] = useState(0);
  const [hours, setHours] = useState(0);
  const [minuts, setMinuts] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function ChangeTimer(e) {
    setTimer(e.target.value);
  }

  function StartTimer() {
    setDate(new Date(Date.now() + timer * 1000));
    setDateNow(Date.now());
    setTime(~~((date - dateNow) / 1000));
    setHours(Math.floor(time / (60 * 60)));
    setMinuts(Math.floor(time / 60));
    setSeconds(Math.floor(time % 60));
    setTime(~~((date - dateNow) / 1000));
  }

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setHours(Math.floor((time / (60 * 60)) % 24));
        setMinuts(Math.floor((time / 60) % 60));
        setSeconds(Math.floor(time % 60));
        setDateNow(Date.now());
        clearInterval(interval);
        setTime(~~((date - dateNow) / 1000));
      }, 100);
    } else {
      setHours(0);
      setMinuts(0);
      setSeconds(0);
    }
  });
  return (
    <>
      <input placeholder="Seconds" type="number" onChange={ChangeTimer} />

      <button onClick={StartTimer}>Start</button>

      <br />
      <br />

      <span>
        {hours} : {minuts} : {seconds}
      </span>
    </>
  );
}

export default App;
