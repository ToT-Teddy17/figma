import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    loginName: "teddy@gmail.com",
    password: "123456",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (
      user.loginName === e.target.name.value &&
      user.password === e.target.password.value
    ) {
      toast("amjilttai");
      navigate("/register", {
        replace: true,
        state: { bookName: "Fake Title" },
      });
    } else {
      toast("none");
    }
  };
  return (
    <div>
      <Header />
      <form onSubmit={onSubmit}>
        <label htmlFor="username ">Login Name:</label>
        <input type="email" name="name" />
        <br />
        <label htmlFor="password">password:</label>
        <input type="password" name="password" />

        <button>Sign in</button>
        <ToastContainer></ToastContainer>
      </form>
    </div>
  );
}
