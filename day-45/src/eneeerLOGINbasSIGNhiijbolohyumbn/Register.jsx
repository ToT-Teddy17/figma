import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Register() {
  const [formSubmitted, setForSubmited] = useState(false);

  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }

  const handlesubmit = function (event) {
    event.preventDefault();
    setForSubmited(true);
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="email">email:</label>
        <input type="email" />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
