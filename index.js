const express = require("express");
const app = express();
const routes = require("./src/routes/app");
require('dotenv').config()

app.use("/", routes);

app.listen(8080);
