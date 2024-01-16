import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StripeContainer from './components/StripeContainer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import NoPage from './pages/NoPage';
import { useState } from 'react';
import LamHur23 from './assets/LamHur23.png';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    <div className="App">
      <h1>Lambros Checkout</h1>
      {showItem ? <StripeContainer/> : <> <h3>$300.00</h3> <img src={LamHur23} alt="Blue car"/><button onClick={() => setShowItem(true)}>Rent Car</button> </>}
    </div>
    </>
  );
}

export default App;
