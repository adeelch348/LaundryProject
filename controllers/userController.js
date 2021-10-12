const db = require("../models");

const User = db.users;

const addUser = async (res, req) => {
  try {
    // let data = await User.build({
    //   user_name: "Adeel",
    //   user_email: "adeel@gmail.com",
    // });

    let data = await User.create({
      user_name: "Adeel",
      user_email: "adeel@gmail.com",
      gender: "Male",
    });
    // console.log(data.dataValues);
    // await data.save();

    let response = {
      data: "ok",
    };
    req.status(200).json(response);
  } catch (e) {
    console.error(e.message);
  }
};

module.exports = {
  addUser,
};
