import logo from './chicken.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_self"
          rel="noopener noreferrer"
        >
          Learn React To Create Your Own Spinning Chicken!
        </a>
      </header>
    </div>
  );
}

export default App;
