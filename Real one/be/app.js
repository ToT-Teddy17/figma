console.log("iShop E-Commerce Backend");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const menuApi = require("./routes/menu-api");
const adminApi = require("./routes/admin-api");
const app = express();
const PORT = 8080;

const MONGODB_CONNECTION_STRING =
  "mongodb+srv://isit_teddy:VJHg7Y8aFCz2et4T@cluster0.rk2ee40.mongodb.net/test";

app.use(cors());
app.use(express.json());
app.use("/menu", menuApi);
app.use("/admin", adminApi);

app.listen(PORT, () => {
  mongoose
    .connect(MONGODB_CONNECTION_STRING)
    .then(console.log("database succesfully "))
    .catch((error) => console.log(error));
  console.log(
    `iShop E-Commerce application running on http://localhost:${PORT} `
  );
});
