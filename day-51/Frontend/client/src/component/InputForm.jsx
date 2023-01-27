import React from "react";

export default function InputForm({ loaded, setLoaded, setData }) {
  const ATMOMENT_URL = "http://localhost:8080/data";
  async function postData(data) {
    console.log(data);
    console.log(typeof JSON.stringify(data));

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(ATMOMENT_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      age: e.target.age.value,
    };
    postData(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input placeholder="Name" name="name" />
        </label>
        <br></br>
        <label>
          Age:
          <input placeholder="Age" name="age" />
        </label>
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}
