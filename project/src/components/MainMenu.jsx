import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import SubMenu from "./SubMenu";
import { Button, Navbar } from 'react-bootstrap';
import menus from "../data/menu";
import ButtonWarning from "./ButtonWarning";




function MainMenu() {
    const subMenus = menus.map(subMenu => {
        return (
            <SubMenu title={subMenu.title} position={subMenu.position} children={subMenu.children} />

        )
    })
    return (



        <div className="Menu" >
            <ButtonWarning />
            <div className="sub">
            {subMenus}
            </div>
            <div className="days" >30 Days Free Return</div>







        </div>

    )
}

export default MainMenu