import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Cardheseg from "./CardSub";
import Cards from "./Cards";
import { useState } from "react";
import cards from "../data/card";
import { Routes, Route, Link } from "react-router-dom";
import Sign from "./Sign";

export default function ProfileSearch(props) {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  function handleRegister(event) {
    event.preventDefault();
    console.log(event.target.firstname.value);
    console.log(users);
    const user = {
      title: cards.title.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
    };
    setUsers([...users, user]);
  }

  return (
    <form onSubmit={handleRegister}>
      <div className="search-ikhbie">
        <img className="logo" src="logo.png" alt="" />

        <Form className="search-box">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Search
          </Form.Label>
          <Form.Control id="inlineFormInput" placeholder="Search" />
          <Button className="btn-warning text-light" type="submit">
            Search
          </Button>
        </Form>

        <div className="text-heseg">
          <div>
            <i class="bi bi-person"></i>
            <a href="">
              <img className="icon" src="Profile.png" alt="" />
            </a>
          </div>
          <div>
            <i class="icons bi bi-heart"></i>
          </div>
          <div>
            <button className="icons">
              <i class=" bi bi-cart"></i>
            </button>
            <i class="text-warning">{props.wishlist} </i>
            {/* {cards.map(u => {
                return (
                    <div>
                        <div>{u.title}</div>
                       
                    </div>
                )
            })} */}
          </div>
        </div>
      </div>
    </form>
  );
}
