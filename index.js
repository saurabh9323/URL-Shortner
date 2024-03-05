const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const url = require("./routes/routers");
const router = require("./routes/routers");
const { connectToMongoDB } = require("./connect");

app.use(bodyParser.json());
app.use(express.json());

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.use("/", router);

app.listen(3000, () => {
  console.log("server is running on port number 3000");
});
