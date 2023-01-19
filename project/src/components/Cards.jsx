import React from "react";
import cards from "../data/card";
import Cardheseg from "./CardSub";
import { useState } from "react";

function Cards(props) {
  const [users, setUsers] = useState([]);

  function handleRegister(event) {
    event.preventDefault();
    console.log(event.target.firstname.value);
    console.log(users);
    const user = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
    };
    setUsers([...users, user]);
  }

  const cardMenu = cards.map((card) => {
    return (
      <Cardheseg
        title={card.title}
        rating={card.rating}
        img={card.img}
        rate={card.rate}
        icon={card.icon}
        wishlist={props.wishlist}
        setWishList={props.setWishList}
      />
    );
  });
  return cardMenu;
}

export default Cards;
