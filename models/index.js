const { Sequelize, DataTypes } = require("sequelize");
const { addUser } = require("../controllers/userController");

const sequelize = new Sequelize("adeel", "adeel", "adeel348", {
  dialect: "postgres",
  host: "127.0.0.1",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Successfully Connected to Database");
  })
  .catch((error) => {
    console.log(error);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Table Created Successfully");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

db.users = require("./users")(sequelize, DataTypes);
exports.module = db;
