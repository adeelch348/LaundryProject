const express = require("express");
const app = express();

const port = 3000;

// require("./models/index");

app.get("/", function (res, req) {
  req.send("Laundry Application");
});

app.listen(port, () => {
  console.log(`App is listening at port: http://localhost:${port}`);
});
