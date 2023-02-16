import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Categories from "./components/Categories";
import CategoryEditForm from "./components/CategoryEditForm";
import CategoryForm from "./components/CategoryForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={<CategoryEditForm />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
