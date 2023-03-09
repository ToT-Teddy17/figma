import express, { request, response } from "express";
const apiRouter = express.Router();

import { getPopularCategories } from "../services/category-services.js";

import {
  fireEmployee,
  getEmployees,
  getMaxNo,
  hireEmployee,
  updateEmployee,
} from "../services/employee-services.js";
import { getChildMenus, getParentMenus } from "../services/menus_services.js";
const api_router = express.Router();

api_router.get("/employee", async (request, response) => {
  const result = await getEmployees;
  console.log(result);

  response.status(200).send(result);
});

api_router.put("/employee", async (request, response) => {
  const { empNo, lastName, gender } = request.body;

  const result = await updateEmployee(empNo, lastName, gender);
  console.log(result);
  response.status(200).send({});
});

api_router.delete("/employee", async (request, response) => {
  const body = request.body;
  console.log(body);

  const result = await fireEmployee(body.empNo);
  response.status(200).send(result);
});

api_router.post("/employee", async (request, response) => {
  const { birthDate, firstName, lastName, gender, hireDate } = request.body;
  const { max } = await getMaxNo();
  console.log(max);
  const result = await hireEmployee(
    max + 1,
    birthDate,
    firstName,
    lastName,
    gender,
    hireDate
  );
  console.log(result);

  response.status(200).send({});
});
api_router.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});
api_router.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();
  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildMenus(parent.id);
      console.log(children);
      parent.children = children;
      return parent;
    })
  );
  console.log(parentMenus);
  response.status(200).send(parentMenus);
});
export default api_router;
