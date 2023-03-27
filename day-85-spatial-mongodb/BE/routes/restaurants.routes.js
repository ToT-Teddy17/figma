const { Router, request } = require("express");
const { getRestaurants } = require("../controllers/restaurants.controller.js");

const route = Router();

route.get("/restaurants", getRestaurants);

module.exports = route;
