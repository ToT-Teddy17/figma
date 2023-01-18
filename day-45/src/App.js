import logo from './logo.svg';
import './App.css';
import Accordion from './eneeerLOGINbasSIGNhiijbolohyumbn/Accordion';
import { Route,Routes } from "react-router-dom";
import Login from './eneeerLOGINbasSIGNhiijbolohyumbn/Login';
import Home from './eneeerLOGINbasSIGNhiijbolohyumbn/Home';
import Register from './eneeerLOGINbasSIGNhiijbolohyumbn/Register';
import Header from './eneeerLOGINbasSIGNhiijbolohyumbn/Header';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/accordion" element={<Accordion/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
