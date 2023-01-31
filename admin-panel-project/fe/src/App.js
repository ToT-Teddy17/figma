import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <h1>Admin Panel Project</h1>
      <Routes>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
