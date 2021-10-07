const Sequelize = require("sequelize");

const sequelize = new Sequelize("adeel", "adeel", "adeel348", {
  host: "localhost",
  port: 3000,
  dialect: "postgres",
});

console.log("before authentication");
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

//const result = sequelize.authenticate().then(() => console.log("authorized"));
