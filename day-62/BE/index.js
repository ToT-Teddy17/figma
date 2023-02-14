console.log("Day-62-User Login CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { request } = require("http");
const { response } = require("express");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post("./register", (request, response) => {
  const body = request.body;
  console.log(body);

  fs.readFile("./data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    const readDataObj = JSON.parse(readData);
    console.log(readDataObj);
    readDataObj.push(body);

    fs.writeFile(
      "./data/users.json",
      JSON.stringify(readDataObj),
      (writeError) => {
        if (writeError) {
          response.json({
            status: "file wrtie error",
          });
        }
        response.json({
          status: "success",
          data: readDataObj,
        });
      }
    );
  });
});

app.get("/users", (request, response) => {
  fs.readFile(".data/users.json", "utf-8", (readError, readData) => {
    if (readError) {
      response.json({
        status: "file read error",
        data: [],
      });
    }
    response.json({
      status: "succes",
      data: JSON.parse(readData),
    });
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
