const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const url = require("./routes/routers");
const router = require("./routes/routers");
const staticRoute = require("./routes/staticRoute");

const { connectToMongoDB } = require("./connect");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.use("/", router);
app.use("/", staticRoute);

app.listen(3000, () => {
  console.log("server is running on port number 3000");
});
