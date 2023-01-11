import React from "react"
import CardHeader from "react-bootstrap/esm/CardHeader";
import cards from "../data/card";
import Cardheseg from "./CardSub";

const cardMenu = cards.map((card) => {
    return <Cardheseg
        title={card.title} rating={card.rating} img={card.img} rate={card.rate} />
})

function Cards() {
    console.log(cardMenu)
    return (
        cardMenu
    )
}

export default Cards