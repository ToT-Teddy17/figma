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
import Frame58 from './components/Frame58';
import Frame66 from './components/Frame66';
import Frame68 from './components/Frame68';
import Frame69 from './components/Frame69';
import Frame76 from './components/Frame76';
import CanonUnder from './components/CanonUnder';
import { useState } from 'react'
import { Routes, Route,Link} from 'react-router-dom'
import Footer from './components/Footer';
import Sign from './components/Sign';
import FirstPage from './components/AppFunc';






function App() {

  const [wishlist, setWishList] = useState(0)

  return (
    <div className='
    '>
      {/* <Header />
      <Search wishlist={wishlist} />
      <MainMenu />
      <CanonCamera />
      <CanonUnder />
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

        <CardMenu wishlist={wishlist}
          setWishList={setWishList} />
        <SaleUp />

        <div>
          <Frame53 />
          <Frame58 />
          <Frame66 />
          <Frame68 />
          <Frame69 />
          <Frame76 />
        </div> */}


        {/* <Routes>
          <Route path="/sign" element={<Sign/>}></Route>
        </Routes> */}
       <Routes>
      <Route path={'/'} element={<FirstPage/>}/>
      <Route path="/sign" element={<Sign/>}></Route>
      <Route path="/register"  element={<FirstPage/>} ></Route>
      
      
    </Routes>





        












        {/* <Footer/> */}








      </div>


    // </div>
  );

}




export default App;

