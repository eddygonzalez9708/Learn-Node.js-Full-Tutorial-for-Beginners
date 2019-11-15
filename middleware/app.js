const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/example", (req, res, next) => {
  // console.log(req.url, req.method);
  req.banana = "banana";
  next();
});

app.get("/", (req, res) => {
  res.send("Middleware");
});

app.get("/example", (req, res) => {
  console.log(req.banana);
  res.send("More Middleware");
});

app.listen(3000);