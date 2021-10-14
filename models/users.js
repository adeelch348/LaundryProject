"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "user",
    {
      user_name: DataTypes.STRING,
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      paranoid: true,
      deletedAt: "SoftDelete",
      // hooks: {
      //   beforeValidate: (user, options) => {
      //     user.user_name = "Nabeel";
      //     user.gender = "Male";
      //   },
      //   afterValidate: (user, options) => {
      //     user.user_name = "Huzaifa";
      //   },
      // },
    }
  );
  // users.associate = function (models) {
  //   // associations can be defined here
  // };

  //Another way to define hooks with addHook() Method

  // users.addHook("afterValidate", "customName", (user, options) => {
  //   user.user_name = "Ali Hussnain";
  //   //user.user_email = "nabeel@gmail.com";
  // });

  // Another way to define hooks directly
  // users.afterValidate("LastHooks", (user, options) => {
  //   user.user_name = "Umer";
  //   user.user_email = "adeel3@gmail.com";
  // });
  return users;
};
