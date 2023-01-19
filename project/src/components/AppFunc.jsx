import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMenu from "./MainMenu";
import Header from "./Header";
import Search from "./Search";
import CanonCamera from "./CanonCamera";
import CardMenu from "./Cards";
import SaleUp from "./SaleUp";
import Frame53 from "./Frame53";
import Frame58 from "./Frame58";
import Frame66 from "./Frame66";
import Frame68 from "./Frame68";
import Frame69 from "./Frame69";
import Frame76 from "./Frame76";
import CanonUnder from "./CanonUnder";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import Sign from "./Sign";
import CanonSlider from "./CanonSlider";
export default function FirstPage() {
  const [wishlist, setWishList] = useState(0);
  return (
    <div>
      <Header />
      <Search wishlist={wishlist} />
      <MainMenu />
      <CanonSlider />
      <CanonUnder />
      <div className=" align-middle d-flex justify-content-around bg-white">
        <h1 className="chincha">Popular products</h1>
        <div className="aButton">
          <a href="@">Cameras</a>

          <a href="@">Laptops</a>

          <a href="@">Tablets</a>

          <a href="@">Mouses</a>
        </div>
      </div>
      <div className="Cardmenu">
        <CardMenu wishlist={wishlist} setWishList={setWishList} />
        <SaleUp />

        <div>
          <Frame53 />
          <Frame58 />
          <Frame66 />
          <Frame68 />
          <Frame69 />
          <Frame76 />
        </div>
      </div>
      <Routes>
        <Route path="/sign" element={<Sign />}></Route>
      </Routes>
    </div>
  );
}
