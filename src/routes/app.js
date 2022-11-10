const express = require("express");
const router = new express.Router();
const {
  getTweets,
  getTweetsStream,
  getRules,
  deleteRules,
} = require("../controllers/getTweets/getTweets");
const { validateRequestQuery } = require("zod-express-middleware");
const {
  searchTweetApiSchema,
} = require("../middlewares/validators/tweetSearchApi/searchApiValidator");

router.get(
  "/search/tweets",
  validateRequestQuery(searchTweetApiSchema),
  getTweets
);

router.get("/rules/get", getRules);

router.delete("/rule/delete", deleteRules);

module.exports = router;
