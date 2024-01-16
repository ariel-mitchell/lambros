import './App.css';
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
    </div>
  );
}

export default App;
