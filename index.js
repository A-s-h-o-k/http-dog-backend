const express = require("express");
const server = express();
const mongoose = require("mongoose");
const signUp = require("./routes/SignUp");
const logIn = require("./routes/Login");
const cors = require("cors");
const {
  getList,
  searchList,
  saveList,
  getSavedList,
  getListDataById,
} = require("./routes/List");

server.use(express.json());
server.use(
  cors({
    origin: "*",
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
  })
);

mongoose
  .connect(
    "mongodb+srv://ammineniashok143:CwV5qJ0lsdV4gyCn@cluster0.wgzpq.mongodb.net/http_dog?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("------ data base connected successfully -------");
  })
  .catch((e) => {
    console.log(e.message, "data base connection failed");
  });

server.get("/getList", getList);

server.post("/signUp", signUp);

server.post("/logIn", logIn);

server.get("/search", searchList);

server.post("/saveList", saveList);

server.get("/getSavedList", getSavedList);

server.get("/getSavedListData", getListDataById);

server.listen(3001);
