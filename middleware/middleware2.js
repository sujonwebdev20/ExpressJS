const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/:age", (req, res, next) => {
  if (req.params.age < 18) {
    res.redirect("/fail");
  }
  next();
});

app.get("/fail", (req, res) => {
  res.send("fail");
});

app.get("/:age", (req, res, next) => {
  res.send("your age is " + req.params.age);
});

const PORT = 2222;

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
