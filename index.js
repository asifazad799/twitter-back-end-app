const express = require("express");
require("dotenv").config();
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
const { getTweetsStream } = require("./src/controllers/getTweets/getTweets");
const routes = require("./src/routes/app");

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.use(
  require("cors")({
    origin: "*",
  })
);

app.use("/", routes);

io.on("connection", (socket) => {
  console.log("conectet");
  socket.on("getRealTimeTweets", () => {
    getTweetsStream(io);
    // io.emit("tweet", "hai");
  });
});

httpServer.listen(process.env.PORT || 8080, () => {
  console.log(
    "\x1b[33m%s\x1b[0m",
    `App running on port: ${process.env.PORT || 8080}`
  );
});
