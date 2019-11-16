const express = require("express");
const app = express();
const people = require("./routes/people");

app.use("/people", people);

app.set("view engine", "ejs")

app.get("/:userQuery", (req, res) => {
  res.render("index", {
    data : {
      userQuery: req.params.userQuery,
      searchResults: ["book1", "book2", "book3"],
      loggedIn: true,
      username: "eddyjg"
    }});
});

app.listen(3000);