const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", {
    heading: "Home Page",
    title: "PUG",
  });
});

const PORT = 2222;

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
