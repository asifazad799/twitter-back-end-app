const axios = require("axios");

const getTweets = async (req, res) => {
  try {
    let resp = await axios.get(
      `https://api.twitter.com/2/tweets/search/recent?query=${req.query.query}`,
      {
        headers: {
          Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAALhOjAEAAAAAwku1XnxUgGyrqUIVEK6aqVo2NJc%3DMvsRVaGJZxsg7F8UrcZY85OsgVqUjxmf22Wk1ABwYBkN8aUw7b`,
        },
      }
    );
    res.send({ ...resp.data });
  } catch (error) {
    console.log(error.response.data.errors);
    res.send(error.response.data.errors);
  }
};

module.exports = {
  getTweets,
};
