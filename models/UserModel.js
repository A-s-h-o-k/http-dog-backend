const { Schema, default: mongoose } = require("mongoose");

const UserModel = new Schema({
  firstName: {
    type: String,
    required: [true, "first name is required."],
  },
  lastName: {
    type: String,
    required: [true, "last name is required."],
  },
  userName: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
    minlength: [3, "Username must be at least 3 characters long."],
    maxlength: [20, "Username cannot exceed 20 characters."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [6, "Password must be at least 6 characters long."],
    maxLength: [16, "Password should not exceed 16 characters"],
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model("users", UserModel);
