const { Schema, default: mongoose } = require("mongoose");

const StatusCodes = new Schema({
  statusIds: [Schema.ObjectId],
  name: String,
  createdAt: { type: Date, default: new Date() },
  userId: Schema.ObjectId,
});

const UserListModel = mongoose.model("userssavedlists", StatusCodes);

module.exports = UserListModel;
