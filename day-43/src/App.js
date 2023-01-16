import './App.css';
import { Routes, Route,Link} from 'react-router-dom'
import About from './components/About'


import Neg from './components/Neg';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Tedd from './components/Tedd';
import NotFound from './components/NotFound';


function App() {
  return (
    <div>
      <div id='navbar'>
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>








      <h1>Good-Morning</h1>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="tedd" element={<Tedd />} />
        </Route>
        <Route path="/about" element={<About />} />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />






      </Routes>
    </div>
  )
}
export default App