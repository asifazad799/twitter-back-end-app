const express = require("express");
const router = new express.Router();
const { getTweets } = require("../controllers/getTweets/getTweets");
const { validateRequestQuery } = require("zod-express-middleware");
const {
  searchTweetApiSchema,
} = require("../middlewares/validators/tweetSearchApi/searchApiValidator");

router.get(
  "/search/tweets",
  validateRequestQuery(searchTweetApiSchema),
  getTweets
);

module.exports = router;
