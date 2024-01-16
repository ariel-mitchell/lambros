import './App.css';
import Banner from "./components/Banner";
import CarTable from './components/CarTable';
import AdminAdd from './components/admin/AdminAdd';
import AdminUpdate from './components/admin/AdminUpdate';
import ThreeDee from './components/ThreeDee';
import { Canvas } from "@react-three/fiber";
import AdminGenHash from './components/admin/AdminGenHash';
import Car3DModel from './components/Car3DModel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import NoPage from './pages/NoPage';
import Admin from './pages/Admin';
import Add from './pages/admin/Add';
import Update from './pages/admin/Update';
import Hash from './pages/admin/Hash';
import Rent from './pages/Rent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add" element={<Add />} />
          <Route path="/admin/update" element={<Update />} />
          <Route path="/admin/hash" element={<Hash />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    <div className="App">
      <Banner/>
      <section>
        <div style={{ width: "50vw", height: "50vh" }}>
          <Canvas size={[`2000px`,`3000px`]} camera={{position: [10, 0, 80], rotation: [0,0,0], fov: 45}} style={{width: `100%`, height: `100%`, position: `relative` }}>
            <pointLight position={[30, 30, 30]} />
            <ambientLight intensity={[20]}/>
            {/* <ThreeDee position={[0, 0, 0]} /> */}
            <Car3DModel position={[0,0,0]} scale={[16,16,16]}/>
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
