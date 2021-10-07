const Sequelize = require("sequelize");

const sequelize = new Sequelize("adeel", "adeel", "adeel348", {
  host: "localhost",
  dialect: "postgres",
  pool: { max: 5, min: 0, idle: 1000 },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });
// await function authentication() {
//   try {
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };
// authentication();
