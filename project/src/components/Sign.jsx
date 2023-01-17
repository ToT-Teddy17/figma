import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';

import { Routes, Route, Link } from 'react-router-dom'
import FirstPage from "./AppFunc"

export default function Sign() {

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">


            <div class="card">

                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item text-center">
                        <a class="nav-link active btl" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
                    </li>
                    <li class="nav-item text-center">
                        <a class="nav-link btr" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Signup</a>
                    </li>

                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                        <div class="form px-4 pt-5">

                            <input type="text" name="" class="form-control" placeholder="Email or Phone" />

                            <input type="text" name="" class="form-control" placeholder="Password" />
                            <button class="btn btn-dark btn-block">Login</button>
                        </div>
                    </div>

                    <Link to={"/register"} >text</Link>
                            <Routes>
                                <Route path="/register" element={<Sign />}></Route>
                            </Routes>




                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">


                        <div class="form px-4">

                            <input type="text" name="" class="form-control" placeholder="Name" />

                            <input type="text" name="" class="form-control" placeholder="Email" />

                            <input type="text" name="" class="form-control" placeholder="Phone" />

                            <input type="text" name="" class="form-control" placeholder="Password" />

                            <button class="btn btn-dark btn-block">Signup</button>



                            <Link to={"/register"} >text</Link>
                            <Routes>
                                <Route path="/register" element={<Sign />}></Route>
                            </Routes>

                        </div>
                    </div>
                </div>
            </div>


        </div>





    )
}






