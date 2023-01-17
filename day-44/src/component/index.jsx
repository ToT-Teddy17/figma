import {Link} from "react-router-dom";
import "bootstrap"
export default function Index(){


    const aboutPageData={
        from:"Index",
        message:"welcome to about page",
        timestamp:Date.now()
    }

    const homePageData={
        from:"Index",
        message:"welcome to home page",
        timestamp:Date.now()

    }
    return(
        <div>
            <h1>tedddd</h1>
            <nav className="tsom">
                <Link to={'/about'} state={aboutPageData}>About</Link>
                <Link to={'/accordion'} >Accordion</Link>
                <Link to={'/home'} state={homePageData}>Home</Link>
                <Link to={'/Movies'} >Movies</Link>
                <Link to={'/movie'} >Movie</Link>
                <Link to={'/gallery'} >Image Gallery</Link>
                <Link to={'/toast'} >Toast</Link>
            </nav>
        </div>
    )
}