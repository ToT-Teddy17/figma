import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.min.css"
import MainMenu from './components/MainMenu';
import Header from './components/Header';
import Search from './components/Search';
import CanonCamera from './components/CanonCamera';
import CardMenu from './components/Cards';


function App() {



  return (
    <div className='
    '>
      <Header />
      <Search/>

      <MainMenu />
      <CanonCamera/>
      <div className=' align-middle d-flex justify-content-around bg-white'>
        <h1 className='chincha'>Popular products</h1>
        <div className='aButton'>
          <a href='@'>Cameras</a>
          
        
          <a href='@'>Laptops</a>
          
          <a href='@'>Tablets</a>
          
          <a href='@'>Mouses</a>
        </div>
      </div>
      <div className='Cardmenu'>
      
      <CardMenu/>


     
      </div>


    </div>
  );

}




export default App;

