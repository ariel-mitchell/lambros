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
      <section>
        <div style={{ width: "50vw", height: "50vh" }}>
          <Canvas size={[`2000px`,`3000px`]} camera={{position: [10, 0, 80], fov: 45}} style={{width: `100%`, height: `100%`, position: `relative` }}>
            <pointLight position={[10, 10, 10]} />
            <ambientLight />
            <ThreeDee position={[0, 0, 0]} />
          </Canvas>
        </div>
      </section>
      <CarTable cars=""/>
      <AdminAdd/>
      <AdminUpdate/>
      {/* <AdminGenHash/> */}
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
