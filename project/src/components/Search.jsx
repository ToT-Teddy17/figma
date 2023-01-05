import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



function Search(){

    return(
        <div className="search-ikhbie">
            <img className="logo" src="houston-texans-logo-transparent.png"  alt="" />

       
       <Form className="search-box">
           <Form.Label htmlFor="inlineFormInput" visuallyHidden>
             Search
           </Form.Label>
           <Form.Control
             
             id="inlineFormInput"
             placeholder="Search"
           />
           <Button className="btn-warning text-light" type="submit">
            Search
          </Button>
    </Form>

<div className="text-heseg">
    <div><i class="bi bi-person"></i>
    <a href="@">Sign in</a></div>
    <div><i class="bi bi-heart"></i>
    <i class="bi bi-0-circle-fill text-warning"></i></div>
    <div>
    <i class="bi bi-cart"></i>
    <i class="bi bi-0-circle-fill text-warning"></i>
    </div>

</div>

    </div>




      
     
    )
}
export default Search