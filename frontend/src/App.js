import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner";
import CarTable from './components/CarTable';
import AdminAdd from './components/admin/AdminAdd';
import AdminUpdate from './components/admin/AdminUpdate';
import ThreeDee from './components/ThreeDee';
import { Canvas } from "@react-three/fiber";
import AdminGenHash from './components/admin/AdminGenHash';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CarTable cars=""/>
      <AdminAdd/>
      <AdminUpdate/>
      {/* <AdminGenHash/> */}
      <section className='App-header'>
        <Canvas>
          {/* <pointLight position={[10, 10, 10]} /> */}
          <ambientLight />
          <ThreeDee position={[0, 0, 0]} />
        </Canvas>
      </section>
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
    </div>
  );
}

export default App;
