const axios = require("axios");
const { twitterConfig,twitterBaseUrl } = require("../../config/twitterApiConfig");

const changeRules = async (operationObject) => {
  try {
    await axios.post(
      `${twitterBaseUrl}/tweets/search/stream/rules`,
      operationObject,
      twitterConfig
    ); 
  } catch (error) {
    console.log(error?.response?.data);
  }
};

module.exports = {
  changeRules,
};
