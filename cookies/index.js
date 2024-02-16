const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// app.use(cookieParser());

// app.get("/", (req, res) => {
//   console.log("Cookies: ", req.cookies);
//   res.cookie("name", "Web Developer").send("cookie set");
// });

// app.get("/", (req, res) => {
//   res.cookie("name", "Web Programmer", { expire: 20000 + Date.now() });
//   res.send("Cookie set");
// });

app.get("/", (req, res) => {
  res.cookie("name", "Web Programmer", { maxAge: 20000 });
  res.send("Cookie set");
});

app.get("/clear", (req, res) => {
  res.clearCookie("name");
  res.send("Cookies are clear");
});

const PORT = 2222;

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
