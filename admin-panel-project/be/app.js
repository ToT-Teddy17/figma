console.log("its my app.js");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server is going to http://localhost:${PORT}`);
});
