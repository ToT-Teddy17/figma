import React, { useEffect, useState } from "react";

export default function Users() {
  const URL = `http://localhost:8080/users`;
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const FETCHED_DATA = await fetch(URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON);
    setUsers(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <h1>Users list</h1>
      <table>
        <thead>
          <tr>
            <th>first name</th>
            <th>last name</th>
            <th> email</th>
            <th>address</th>
          </tr>
        </thead>
      </table>
    </>
  );
}
