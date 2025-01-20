const UserModel = require("../models/UserModel");

const logIn = async (req, res) => {
  console.log(req.data);
  const { userName, password } = req.body;

  if (!userName) {
    res.statusCode = 400;
    return res.send({ message: "user name is required" });
  }

  if (!password) {
    res.statusCode = 400;
    return res.send({ message: "password is required" });
  }
  const user = await UserModel.findOne({ userName });
  if (!user) {
    res.statusCode = 404;
    return res.send({
      message: "user not found",
    });
  }

  if (password == user.password) {
    res.statusCode = 200;
    return res.send({ message: "successfully signup", data: user });
  }
};

// route.post("/login", logIn);

module.exports = logIn;
