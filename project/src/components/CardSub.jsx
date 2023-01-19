import Card from "react-bootstrap/Card";
import { Stars } from "./Stars";
import { useState } from "react";
import ClickButton from "./+Button";
function Cardheseg(props) {
  console.log(props);

  return (
    <Card className="col-2  cardbody">
      <Card.Img src={props.img} />
      <a>
        <i id="heart" class="bi bi-chat-heart-fill"></i>
      </a>
      <h4>
        <Card.Title>{props.title}</Card.Title>
      </h4>
      <Card.Body>
        <div className="d-flex">
          <div>
            <div className="d-flex justify-content-between">
              <Card.Text>{props.rating}</Card.Text>
              <ClickButton
                wishlist={props.wishlist}
                setWishList={props.setWishList}
              />
            </div>
            <Stars />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cardheseg;
