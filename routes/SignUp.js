const server = require("express")();
const UserModel = require("../models/UserModel");

const signUp = async (req, res) => {
  try {
    const user = new UserModel(req.body);
    await user.validate();
    await user.save();
    res.send({ message: "successfully signup", data: user });
  } catch (e) {
    console.log(e.message, "error occured ");
    res.statusCode = 400;
    return res.send(e);
  }
};

module.exports = signUp;
