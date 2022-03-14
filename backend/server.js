const express = require("express");
const articles = require("./dummydata/articles");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;

const server = express();

server.listen(
  PORT,
  console.log(`server is working and listening PORT ${PORT}`)
);

server.get("/", (req, res) => {
  res.send("Check if Nodemon works");
});

server.get("/api/articles", (req, res) => {
  res.json(articles);
});

server.get("/api/articles/:id", (req, res) => {
  let article = articles.find((n) => n._id === req.params.id);
  res.send(article);
  console.log(req.params);
});
