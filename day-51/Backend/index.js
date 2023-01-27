console.log("Day-51: API Express Js");
const { request, response } = require("express");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());
let data = [
  {
    id: 1,
    name: "teddy",
    age: "17",
  },
];

app.get("/", (request, response) => {
  response.send("Here iam a brutally powerful");
});

app.get("/data", (request, response) => {
  response.json(data);
});

app.post("/data", (request, response) => {
  const length = data.length;
  const newData = {
    id: length + 1,
    name: request.body.name,
    age: request.body.age,
  };
  data = [...data, requestData];
  response.json(data);
});

app.delete("/data", (request, response) => {
  console.log(request.body);
  const newData = data.filter((d) => d.id !== request.body.id);

  data = newData;
  console.log(data);
  response.json(data);
});

app.put("/data", (request, response) => {
  const found = data.filter((d) => d.id === request.body.id);
  const newData = data.map((d) => {
    if (d.id === request.body.id) {
      (d.name = request.body.name), (d.age = request.body.age);
    }
    return d;
  });
  data = newData;
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
