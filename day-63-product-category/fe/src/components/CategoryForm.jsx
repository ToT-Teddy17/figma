import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryForm() {
  const URL = "http://localhost:8080/category";
  const navigate = useNavigate();

  async function handleCategorySumbit(e) {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        catName: e.target.catName.value,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    if (FETCHED_JSON.status === "success") {
      navigate("/category/list");
    }
  }

  return (
    <div>
      <h1>Category Form</h1>
      <form onSubmit={handleCategorySumbit}>
        <input type="text" name="catName" />
        <br />
        <button type="sumbit">save </button>
      </form>
    </div>
  );
}
