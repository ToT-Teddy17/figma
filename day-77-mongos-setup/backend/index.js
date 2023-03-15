console.log("Day-77");
const { request, response, Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api.js");

const PORT = 8081;
const MONGO_CONNECTION_STRING =
  "mongodb+srv://isit_teddy:1quRjrtJtgRlq6lS@cluster0.rk2ee40.mongodb.net/test";

const app = express();
app.use(express.json());
app.use(apiRouter);

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => console.log("database connected succesfully"))
  .catch((error) => console.error(error));

app.get("/", (request, response) => {
  response.send("<h1>Day 77 - Mongoose Application</h1>");
});

app.listen(PORT, () => {
  console.log(`Express Application is running on http://localhost:${PORT}`);
});
