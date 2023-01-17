
import './App.css';
import Accordion from './component/Accordion';
import {Routes,Route} from "react-router-dom"
import Index from './component';
import About from './component/About';
import Home from './component/Home';
import Movies from './component/Movies';
import Movie from './component/Movie';
import Gallery from './component/Gallery';
import Toaster from './component/Toaster';




function App() {
  return (
    <div>
    
    <Routes>
      <Route path={'/'} element={<Index/>}/>
      <Route path={'/accordion'} element={<Accordion/>}/>
      <Route path={'/about'} element={<About/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/Movies'} element={<Movies/>}/>
      <Route path={'/movie/:id'} element={<Movie/>}/>
      <Route path={'/gallery'} element={<Gallery/>}/>
      <Route path={'/toast'} element={<Toaster/>}/>
      
    </Routes>
    </div>
    
  );
}


export default App;
