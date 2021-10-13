"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      user_name: DataTypes.STRING,
      user_email: {
        type: DataTypes.STRING,
        // allowNull: false,
        unique: true,
      },
      gender: {
        type: DataTypes.STRING,
        defaultValue: "Male",
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {}
  );
  // users.associate = function (models) {
  //   // associations can be defined here
  // };
  return users;
};
