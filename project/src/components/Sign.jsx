import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';

import { Routes, Route, Link } from 'react-router-dom'
import FirstPage from "./AppFunc"

export default function Sign() {

    return (
        <div>
        
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div>
            <h1><b>Sign up</b></h1>
                <form onSubmit className='box'>
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name*</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email*</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password*</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        <div id="emailHelp" class="form-text">Must be least 8 characters</div>
                    </div>
                    
                    <div className="shiljelt">
                    <a href="/">Create account</a>
                    </div>
           




                    <a href="/register">Log in</a>
        </form>
            </div >




        </div >

        </div>



        // <Link to={"/register"} >text</Link>
        // <Routes>
        //     <Route path="/register" element={<Sign />}></Route>
        // </Routes>

    )
}






