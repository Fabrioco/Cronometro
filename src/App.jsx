function App() {
  return (
    <div className="container">
      <div className="stopwatch">
        <h1 className="title">Stopwatch</h1>
        <p className="time" >00:00:00</p>
        <div className="buttons">
          <button className="start">Start</button>
          <button className="stop">Stop</button>
          <button className="reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
