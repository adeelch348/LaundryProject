"use strict";
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
    },
    {
      timestamp: false,
    }
  );
  Employee.associate = function (models) {
    // associations can be defined here
  };
  return Employee;
};
