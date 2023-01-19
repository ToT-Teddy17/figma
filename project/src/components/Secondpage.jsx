import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMenu from "./MainMenu";
import Header from "./Header";
import Search from "./Search";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sign from "./Sign";
import ProfileSearch from "./ProfileSearch";
export default function SecondPage() {
  const [wishlist, setWishList] = useState(0);

  return (
    <div>
      <Header />
      <ProfileSearch wishlist={wishlist} />
      <MainMenu />

      <Routes>
        <Route path="/sign" element={<Sign />}></Route>
      </Routes>
    </div>
  );
}
