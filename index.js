const express = require("express");
const server = express();
const mongoose = require("mongoose");
const signUp = require("./routes/SignUp");
const logIn = require("./routes/Login");
const cors = require("cors");
const getList = require('./routes/List')
 

// server.once("connection", (e) => {
//   console.log("server started successfully");
// });

server.use(express.json());
server.use(
  cors({
    origin: "*", // Allow requests only from this origin
    methods: "GET,POST", // You can specify the allowed methods as well
    allowedHeaders: "Content-Type,Authorization", // Define allowed headers if needed
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

server.listen(3001);
