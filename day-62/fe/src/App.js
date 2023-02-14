import "./App.css";
import UserRegisterForm from "./components/UserRegisterForm";
import { Route, Routes } from "react-router-dom";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>Day-62 User LOgin CRUD</h1>
      <Routes>
        <Route path="/register" element={<UserRegisterForm />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
