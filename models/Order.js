"use strict";
/**
 * @api {get} /user/:id User information
 * @apiName GetModels
 * @apiGroup Models
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "order",
    {
      order: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      orderDetail: {
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    }
  );
  return Order;
};
