const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("This URL is only GET method");
});

// app.get("/:id", (req, res) => {
//   res.send("ID is: " + req.params.id);
// });

app.get("/:id([0-9]{2})", (req, res) => {
  res.send("ID is: " + req.params.id);
});

app.get("/:letters([a-z]{2})", (req, res) => {
  res.send("ID is: " + req.params.letters);
});

app.get("/:mixed([a-z, 0-9]{2})", (req, res) => {
  res.send("ID is: " + req.params.mixed);
});

app.get("/user/:name/:id", (req, res) => {
  res.send(`User name is: ${req.params.name}. & ID is: ${req.params.id}.`);
});

const PORT = 2222;

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
