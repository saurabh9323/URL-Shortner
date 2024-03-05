const express = require("express");
const router = express.Router();
const urlController = require("../controller/urlController");

router.post("/url", urlController.handleGenerateNewShortURL);
router.get("/:shortId", urlController.shortId);
router.get("/analytics/:shortId", urlController.analytics);

module.exports = router;
