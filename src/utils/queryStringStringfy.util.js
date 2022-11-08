const queryString = require("query-string");

const stringifyQuery = (queryObject) => {
  return queryString.stringify(queryObject);
};

module.exports = {
  stringifyQuery,
};
