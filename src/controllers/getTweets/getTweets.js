const axios = require("axios");
const { emit } = require("nodemon");
const {
  twitterBaseUrl,
  twitterConfig,
  options,
} = require("../../config/twitterApiConfig");
const { errorHandling } = require("../../utils");
const { successMessage } = require("./constands");
const { changeRules } = require("./utils");

const getTweets = async (req, res) => {
  console.log(req.query);

  try {
    let resp = await axios.get(
      `${twitterBaseUrl}/tweets/search/recent?query=%23${req.query.query}&${options}`,
      twitterConfig
    );

    await changeRules({
      add: [{ value: `#${req.query.query}` }],
    });

    res.send({ ...resp.data });
  } catch (error) {
    console.log(error.response.data);
    res.send(error?.response?.data);
  }
};

const getRules = async (req, res) => {
  try {
    let rules = await axios.get(
      `${twitterBaseUrl}/tweets/search/stream/rules`,
      twitterConfig
    );
    res.send(rules.data);
  } catch (error) {
    res.send(error?.response?.data);
  }
};

const deleteRules = async (req, res) => {
  try {
    await changeRules({
      delete: { ids: [req.query.id] },
    });
    res.send({ successMessage });
  } catch (error) {
    res.send(error?.response?.data);
  }
};

const getTweetsStream = async (socket) => {
  try {
    let getStreamResponse = await axios.get(
      `${twitterBaseUrl}/tweets/search/stream?tweet.fields=created_at&expansions=author_id&user.fields=created_at,profile_image_url`,
      { ...twitterConfig, responseType: "stream" }
    );

    getStreamResponse.data.on("data", (data) => {
      try {
        const json = JSON.parse(data);
        console.log(json, "ais");
        socket.emit("tweet", json);
      } catch (error) {}
    });
  } catch (error) {
    console.log(error?.response?.data, "error2");
  }
};

module.exports = {
  getTweets,
  getTweetsStream,
  deleteRules,
  getRules,
};
