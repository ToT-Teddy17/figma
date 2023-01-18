import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h1>Header</h1>
      <div>
        <nav className="hello">
          <Link
            to="/login"
            className={activeIndex === 0 ? "active" : ""}
            setActiveIndex={() => setActiveIndex(2)}
          >
            login
          </Link>
          <Link
            to="/register"
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => {
              setActiveIndex(1);
            }}
          >
            register
          </Link>
          <Link
            to="/accordion"
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => {
              setActiveIndex(2);
            }}
          >
            Acc
          </Link>
          <Link
            to="/"
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => {
              setActiveIndex(3);
            }}
          >
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
}
