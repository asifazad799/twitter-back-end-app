const express = require("express");
const app = express();
const routes = require("./src/routes/app");
require("dotenv").config();

app.use(
  require("cors")({
    origin: "*",
  })
);

app.use("/", routes);

app.listen(process.env.PORT || 8080, () => {
  console.log(
    "\x1b[33m%s\x1b[0m",
    `App running on port ${process.env.PORT || 8080}`
  );
});
