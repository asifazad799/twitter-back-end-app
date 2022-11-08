const twitterBaseUrl = `${process.env.TWITTER_BASE_URL}`;

const twitterConfig = {
  headers: {
    Authorization: `Bearer ${process.env.TWITTER_BEARER_TOCKEN}`,
  },
};

const options = "user.fields=created_at";

module.exports = {
  options,
  twitterConfig,
  twitterBaseUrl,
};
