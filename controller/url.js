const shortId = require("shortid");

const URL = require("../model/url");

exports.handleGenerateNewShortURL = async (req, res) => {
  const shortUrl = req.body;
  if (!shortUrl) res.status(400).json({ error: "url is required" });
  URL.create({
    shortId,
    redirectURL: shortUrl,
    visitHistory: [],
  });
  res.status(200).json({ id: shortId });
};
