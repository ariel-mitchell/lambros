import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner";
import CarTable from './components/CarTable';
import Forecast from './components/Forecast/forecast';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CarTable cars=""/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Forecast />
    </div>
  );
}

export default App;
