const express = require("express");
const router = express.Router();
const urlController = require("../controller/urlController");
const URL = require("../model/url");

router.get("/", async (req, res) => {
  const Allurls = await URL.find({});
  res.render("home", {
    urls: Allurls,
  });
});

module.exports = router;
