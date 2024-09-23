import React from "react";

function App() {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [isActivated, setIsActivated] = React.useState(false);
  const [timeSaved, setTimeSaved] = React.useState([]);

  React.useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prev) => prev + 1);
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours((prev) => prev + 1);
    }
  }, [seconds, minutes, hours]);

  React.useEffect(() => {
    if (isActivated) {
      const time = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(time);
    }
  }, [isActivated]);

  const save = () => {
    const timeActual = `${hours}:${minutes}:${seconds}`;
    setTimeSaved((prev) => [...prev, timeActual]);
  };

  const reset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsActivated(false);
    setTimeSaved([]);
  };

  return (
    <div className="container">
      <div className="stopwatch">
        <h1 className="title">Stopwatch</h1>
        <p className="time">
          {hours}:{minutes}:{seconds}
        </p>
        <div className="buttons">
          {isActivated ? (
            <button onClick={() => setIsActivated(false)} className="pause">Pause</button>
          ) : (
            <button className="start" onClick={() => setIsActivated(true)}>
              Start
            </button>
          )}

          <button className="save" onClick={save}>
            Save
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
      <div className="hour-saved">
        {timeSaved.map((hour, index) => (
          <p key={index} className="hour">
            {hour}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
