import logo from './logo.svg';
import './App.css';
import Banner from "./components/Banner";
import CarTable from './components/CarTable';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Banner/>
      <LoginForm />
      <CarTable cars=""/>
      
    </div>
  );
}

export default App;
