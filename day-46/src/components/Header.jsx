import React from "react";
import { useState } from "react";

export default function Header(props) {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      <div className="ui menu">
        <div className="right menu">
          <a className="item active"></a>

          <div class="ui simple dropdown item">
            <i className="heart icon ">{props.wishlist.length}</i>
            <div class="menu">
              {props.wishlist.map((w, index) => {
                return (
                  <div>
                    <div className="item">
                      {w.name}
                      <button
                        className="ui button"
                        onClick={() => {
                          console.log("removed");
                          props.setWishList(
                            props.wishlist.filter((wish) => wish.id !== w.id)
                          );
                        }}
                      >
                        <i className="close icon"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <a className="item">
            <i className="shopping basket icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
