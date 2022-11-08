const zod = require("zod");

const searchTweetApiSchema = zod.object({
  query: zod.string(),
});

module.exports = {
  searchTweetApiSchema,
};
