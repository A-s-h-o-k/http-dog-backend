const { Schema } = require("mongoose");

const StatusCodes = new Schema({
  code: { required: true, type: Number },
  description: String,
  imageUrl: String,
});
