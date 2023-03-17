import express from "express";
const helloRouter = express.Router();
helloRouter.get("/hellol", (request, response) => {
  response.status(200).json({
    data: "hello",
  });
});

export default helloRouter;
