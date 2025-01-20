const { Schema, default: mongoose } = require("mongoose");

const StatusCodes = new Schema({
  code: { required: true, type: String },
  description: String,
  imageUrl: { type: String, required: true },
  name: String,
  alternateName: [String]
});


const StatusCodeModel = mongoose.model('statuscodes', StatusCodes)
module.exports  = StatusCodeModel