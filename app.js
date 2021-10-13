const express = require("express");
const app = express();
// const db = require("./models");
require("./models");
let userControl = require("./controllers/userController.js");

const port = 3000;

app.use("/doc", express.static("./doc"));

app.get("/", function (res, req) {
  req.send("Laundry Application is a Web Application");
});

app.get("/add", userControl.addUser);

app.listen(port, () => {
  console.log(`App is listening at port: http://localhost:${port}`);
});
