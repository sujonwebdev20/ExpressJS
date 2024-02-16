const express = require("express");
const app = express();
const session = require("express-session");

app.use(
  session({
    secret: "My secret here",
  })
);

// app.get("/", (req, res) => {
//   req.session.username = "Web Programmer";
//   res.send("Session set");
// });

app.get("/", (req, res) => {
  if (req.session.user_visit) {
    req.session.user_visit++;
    res.send(`Your visited this page: ${req.session.user_visit} times`);
  } else {
    req.session.user_visit = 1;
    res.send("hi, you are visit this page first time!");
  }
});

app.get("/get-session", (req, res) => {
  res.send(`Your session user name is: ${req.session.username}`);
});

const PORT = 2222;

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
