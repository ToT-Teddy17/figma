import axios from "axios";
async function fetchAllData(URL, setUsers) {
  // fetch a data from localhost:8080/users
  const FETCHED_DATA = await axios.get(URL); // Response
  console.log(FETCHED_DATA);
  const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: [{id: ....}]}
  console.log(FETCHED_JSON);
  setUsers(FETCHED_JSON.data);
}
async function deleteUser(userId, URL, setUsers) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userId,
    }),
  };
  const FETCHED_DATA = await fetch(URL, options);
  const FETCHED_JSON = await FETCHED_DATA.json();
  setUsers(FETCHED_JSON.data);
}
export { fetchAllData, deleteUser };
