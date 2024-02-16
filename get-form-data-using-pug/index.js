const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("form");
});

app.get("/get-data", (req, res) => {
  res.send(
    "Name is: " + req.query.name + " || " + "Email is: " + req.query.email
  );
});

app.post("/signup", (req, res) => {
  res.send(`Name is: ${req.body.name} || Email is: ${req.body.email}`);
});

const PORT = 2222;

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
