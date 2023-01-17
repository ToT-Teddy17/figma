import "bootstrap/dist/css/bootstrap.min.css"

import { Routes, Route,Link} from 'react-router-dom'
import FirstPage from "./AppFunc"

export default function Sign(){

    return(
        <div>
            <div className="container">
                <div className="content">
                    <div><h1>Sign up</h1></div>
                    <div> 
                    <form onClick className='box'>
                <div>FirstName:<input name='firstname'></input></div>
                <div>LastName:<input name='lastname'></input></div>
                <div>Password:<input name='password'></input></div>
                <div>ConfirmPassword:<input name='confirm'></input></div>
                
                
                    
                <Link to={"/register"}>Register</Link>
                    <Routes>
          <Route path="/register"  element={<FirstPage/>} ></Route>
        </Routes>
            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}