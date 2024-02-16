const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("I'm from middleware");
  next();
});

app.get("/", (req, res, next) => {
  res.send("Got it");
});
app.get("/", (req, res) => {
  console.log("End route");
});

const PORT = 2222;

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
