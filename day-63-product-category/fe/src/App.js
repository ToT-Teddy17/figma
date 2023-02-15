import { Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import CategoryForm from "./components/CategoryForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/category/add" element={<CategoryForm />} />
        <Route path="/category/list" element={<Categories />} />
        <Route path="/category/edit/:id" element={null} />
        <Route path="/category/delete/:id" element={null} />
      </Routes>
    </div>
  );
}

export default App;
