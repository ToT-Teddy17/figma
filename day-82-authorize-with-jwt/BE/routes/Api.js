const api = express.Router();
const express = require("express");
const auth = require("../Middlewave/auth");

api.post("/protected", auth, (request, response, next) => {
  response.status(200).json({
    data: [],
  });
});

api.post("/unprotected", async (request, response) => {
  response.status(200).json({
    data: [],
  });
});
