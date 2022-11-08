const express = require("express");
const router = new express.Router();
const { getTweets } = require("../controllers/getTweets/getTweets");

router.get("/search/tweets", getTweets);

module.exports = router;
