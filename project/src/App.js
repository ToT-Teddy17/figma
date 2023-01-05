import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.min.css"
import MainMenu from './components/MainMenu';
import Header from './components/Header';
import Search from './components/Search';
import CanonCamera from './components/CanonCamera';

function App() {



  return (
    <div className='container'>
      <Header />
      <Search/>

      <MainMenu />
      <CanonCamera/>


    </div>
  );

}




export default App;

