const { Admin_api } = require("./routes/Admin-api");
const { Api } = require("./routes/Api");

const bcrypt = require("bcrypt");
const Users = require("./models/Users");

const express = require("express");

const PORT = 8082;

app.use(express.json());
app.use(cors());
app.use(api);
app.use(adminApi);

const MONGO_CONNECTION_STRING =
  "mongodb+srv://isit_teddy:4dgZigRuS7evf3WG@mern-black.kosj6y7.mongodb.net/test";
app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Day - 82</h1>");
});

app.listen(PORT, () => {
  mongoose
    .connect(MONGO_CONNECTION_STRING)
    .then(() => console.log("Database connected succesfully"))
    .catch((error) => console.error(error));
  console.log(`Express is running on listening on http://localhost:${PORT}`);
});
