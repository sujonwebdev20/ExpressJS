const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = 2222;

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
