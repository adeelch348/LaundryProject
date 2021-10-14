const db = require("../models");
const { DataTypes } = require("sequelize");
const User = db.users;

const addTransaction = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    let data = await User.create(
      {
        user_name: "Adeel",
        user_email: "adeel53@gmail.com",
      },
      {
        transaction: t,
      }
    );
    console.log("commited");
    await t.commit();

    let response = {
      data: data,
    };
    res.status(200).json(response);
  } catch (e) {
    console.log("rollback");
    console.log(e.message);
    await t.rollback();
  }
};

const addUser = async (res, req) => {
  try {
    //----------Adding data with build method-------//
    //     // let data = await User.build({
    //     //   user_name: "Adeel",
    //     //   user_email: "adeel@gmail.com",
    //     // });
    //     // await data.save();
    //----------Adding With Create Method -----//
    //     let data = await User.create(
    //       {
    //         user_name: "Adeel",
    //         user_email: "adeel5@gmail.com",
    //       },
    //     );

    //------------ Fetching Data with help of Finder Query Method-------//
    let data = await User.findAll({
      attributes: ["id", ["user_name", "FullName"], "user_email"],
      paranoid: false,
    });

    //----------- Paranoid SoftDelete Data -------//
    // {
    // console.log(data);
    // let data = await User.destroy({
    //   where: {
    //     id: 3,
    //   },
    // });

    //----------- Paranoid Restore SoftDelete Data -------//

    // let data = await User.restore({
    //   where: {
    //     id: 3,
    //   },
    //   paranoid: false,
    // });
    let response = {
      data: data,
    };
    req.status(200).json(response);
  } catch (e) {
    console.error("Error: ", e.message);
  }
};

//--------------Hooks------------//
//after create
//Before create
//after validate
//Before validate
//after update
//Before update
const Hooks = async (req, res) => {
  try {
    let data = await User.create({
      user_name: "Adeel",
      user_email: "adeel348@gmail.com",
    });
    let response = {
      data: data,
    };
    res.status(200).json(response);
  } catch (e) {
    console.log("Error: ", e.message);
  }
};

const queryInterface = db.sequelize.getQueryInterface();
let queryinterfacedata = async (req, res) => {
  // queryInterface.createTable("Plan", {
  //   name: DataTypes.STRING,
  // });

  // Add Column to Table
  // queryInterface.addColumn("Plan", "name", {
  //   type: DataTypes.STRING,
  // });

  // Alter a Table Column
  // queryInterface.changeColumn("Plan", "name", {
  //   type: DataTypes.TEXT,
  //   defaultValue: "Plans Description",
  // });

  //Rename a Column name
  // queryInterface.renameColumn("Plan", "name", "Name");

  //Remove a column from table
  // queryInterface.removeColumn("Plan", "name", "Name");

  //Remove a table from DB

  // queryInterface.dropTable("Plan");
  // queryInterface.createDatabase("Laundry");
  let data = {
    data: "ok",
  };
  res.status(200).json(data);
};
module.exports = {
  addUser,
  addTransaction,
  Hooks,
  queryinterfacedata,
};
