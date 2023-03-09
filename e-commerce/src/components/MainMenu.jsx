import SubMenu from "./SubMenu";
import { Navbar } from "react-bootstrap";
// import Navbar from 'react-bootstrap/Navbar'
import { GeoAlt } from "react-bootstrap-icons";
import menus from "../data/menus";
import SearchBar from "./SearchBar";

export default function MainMenu() {
  const subMenus = menus.map((subMenu) => {
    return (
      <SubMenu
        id={subMenu.id}
        title={subMenu.title}
        position={subMenu.position}
        children={subMenu.children}
      />
    );
  });

  return (
    <div>
      <Navbar bg="light" id="mainMenu-container" className="px-5">
        {subMenus}
      </Navbar>
    </div>
  );
}
