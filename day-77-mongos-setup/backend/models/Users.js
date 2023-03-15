const { Router, request, response } = require("express");
const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdOn: String,
});

const user = mongoose.model("user", userSchema);
module.exports = user;
