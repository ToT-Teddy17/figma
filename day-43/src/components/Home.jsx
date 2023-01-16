import {Outlet} from"react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
export default function Home(){
    return(
        <div className=""><h1>Home</h1>
        
        <div className="d-flex">
        <a href="/home/tedd">tedd</a>
        <a href="/home/teddy">teddy</a>
        </div>
        <Outlet/>
        
        </div>

       
    )
}