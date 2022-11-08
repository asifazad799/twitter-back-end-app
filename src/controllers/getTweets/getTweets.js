const axios = require("axios");
const {
  twitterBaseUrl,
  twitterConfig,
  options,
} = require("../../config/twitterApiConfig");


const getTweets = async (req, res) => {
  try {
    let resp = await axios.get(
      `${twitterBaseUrl}/tweets/search/recent?query=${req.query.query}&${options}`,
      twitterConfig
    );
    res.send({ ...resp.data });
  } catch (error) {
    res.send(error?.response?.data?.errors);
  }
};

module.exports = {
  getTweets,
};
