import "./App.css";
import { useEffect, useState } from "react";
import InputForm from "./component/InputForm";
const GET_DATA_URL = "http://localhost:8080/data";

const DELETE_DATA_URL = "http://localhost:8080/data";

function App() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const FETCHED_DATA = await fetch(GET_DATA_URL);
      const fetch_data = await FETCHED_DATA.json();

      console.log(fetch_data);

      setData(fetch_data);
    }

    fetchData();
  }, []);

  async function deleteData(data) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA_delete = await fetch(DELETE_DATA_URL, options);
    const fetch_data_delete = await FETCHED_DATA_delete.json();
    setData(fetch_data_delete);
  }
  function handleDelete(id) {
    const data = {
      id: id,
    };
    deleteData(data);
  }

  return (
    <div className="App">
      <h1>Day51 -React/Expres FullStack APP-without Database</h1>
      <InputForm loaded={loaded} setLoaded={setLoaded} setData={setData} />
      {loaded
        ? "...loading"
        : data &&
          data.map((d, index) => {
            return (
              <div>
                <p key={index}>
                  {d.name} -- {d.age}
                </p>
                <button onClick={() => handleDelete(d.id)}>delete</button>
              </div>
            );
          })}
    </div>
  );
}

export default App;
