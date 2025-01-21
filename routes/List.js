const StatusCodeModel = require("../models/StatusCodes");
const UserSavedStatusModel = require("../models/UsersSavedLists");
const mongoose = require("mongoose");

const getList = async (req, res) => {
  const list = await StatusCodeModel.find({});
  res.statusCode = 200;
  return res.send({ message: "sucessfully retrived", data: list });
};

const searchList = async (req, res) => {
  try {
    const { searchKey } = req.query;
    let matchRegex;
    if (searchKey.length <= 3) {
      matchRegex = new RegExp(`^${searchKey}`);
    } else {
      matchRegex = searchKey;
    }

    const result = await StatusCodeModel.find({ code: { $regex: matchRegex } });
    if (result.length === 0) {
      res.statusCode = 204;
      return res.send({ message: "no results found" });
    }
    res.statusCode = 200;
    return res.send({ message: "result found", data: result });
  } catch (e) {
    res.statusCode = 400;
    return res.send({ message: e.message });
  }
};

const saveList = async (req, res) => {
  try {
    const { statusIds, name, userId } = req.body;
    const list = await UserSavedStatusModel.insertMany({
      name,
      statusIds,
      userId,
    });
    res.send(list);
  } catch (e) {
    return res.send(e);
  }
};

const getSavedList = async (req, res) => {
  try {
    const { userId } = req.query;
    const list = await UserSavedStatusModel.find(
      { userId: new mongoose.Types.ObjectId(userId) },
      { name: 1, _id: 1 }
    );
    res.statusCode = 200;
    return res.send({ data: list, message: "data retrived successfully" });
  } catch (e) {
    res.send(e);
  }
};

const getListDataById = async (req, res) => {
  try {
    const { id } = req.query;
    const list = await UserSavedStatusModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "statuscodes",
          localField: "statusIds",
          foreignField: "_id",
          as: "data",
        },
      },
      {
        $project: {
          data: 1,
        },
      },
    ]);
    res.send(list[0]);
  } catch (e) {
    res.send(e);
  }
};

module.exports = {
  getList,
  searchList,
  saveList,
  getSavedList,
  getListDataById,
};
