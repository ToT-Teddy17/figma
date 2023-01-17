import {Link,useLocation} from "react-router-dom";
export default function Home(){



    const location=useLocation()
    const state=location.state;




    return(
        <div>
            <h1>{state.from}</h1>
            <p>{state.message}</p>
            <p>{state.timestamp}</p>
            <Link to={'/'}>back</Link>
        </div>
    )
}