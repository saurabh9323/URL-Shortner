const shortId = require("shortid");

const URL = require("../model/url");

exports.handleGenerateNewShortURL = async (req, res) => {
  const { shortUrl } = req.body;
  if (!shortUrl) res.status(400).json({ error: "url is required" });
  const SHORTID = shortId();
  URL.create({
    shortId: SHORTID,
    redirectURL: shortUrl,
    visitHistory: [],
  });
  res.status(200).json({ id: SHORTID });
};

exports.shortId = async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
};

exports.analytics = async (req, res) => {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
};
