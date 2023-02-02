async function fetchAllData(URL, setUsers) {
  // fetch a data from localhost:8080/users
  const FETCHED_DATA = await fetch(URL); // Response
  const FETCHED_JSON = await FETCHED_DATA.json(); // {status: 'success', data: [{id: ....}]}
  console.log(FETCHED_JSON);
  setUsers(FETCHED_JSON.data);
}

async function createUser(
  URL,
  setCurrentUser,
  setUsers,
  setIsUpdate,
  newUser,
  currentUser
) {
  const putData = {
    id: currentUser.id,
    username: currentUser.username,
    age: currentUser.age,
  };

  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(putData),
  };
  const FETCHED_DATA = await fetch(URL, options);
  const FETCHED_JSON = await FETCHED_DATA.json();
  setUsers(FETCHED_JSON.data);
  setIsUpdate(false);
  setCurrentUser(newUser);
}

export { fetchAllData, createUser };
