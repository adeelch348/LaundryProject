const express = require("express");
const app = express();
require("./models");
let userControl = require("./controllers/userController.js");

const port = 3000;

app.use("/doc", express.static("./doc"));

app.get("/", function (res, req) {
  req.send("Laundry Application is a Web Application");
});

app.get("/add", userControl.addUser);
app.get("/addTransaction", userControl.addTransaction);
app.get("/Hooks", userControl.Hooks);
app.get("/queryInterface", userControl.queryinterfacedata);
app.listen(port, () => {
  console.log(`App is listening at port: http://localhost:${port}`);
});
