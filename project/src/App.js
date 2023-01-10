import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/dist/css/bootstrap.min.css"
import MainMenu from './components/MainMenu';
import Header from './components/Header';
import Search from './components/Search';
import CanonCamera from './components/CanonCamera';
import CardMenu from './components/Cards';
import SaleUp from './components/SaleUp';
import Frame53 from './components/Frame53';


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
      <SaleUp/>

      <div>
        <Frame53/>
        <div></div>
      </div>
      


     
      </div>


    </div>
  );

}




export default App;

