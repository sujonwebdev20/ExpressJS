const express = require("express");
const app = express();

// just accept the GET request
app.get("/", (req, res) => {
  res.send("<h1>Hello from Home Page</h1>");
  console.log("hello");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Hello from Contact Page</h1>");
});

app.get("*", (req, res) => {
  res.send("<h1>404, means this page is not found</h1>");
});

// just accept the POST request
app.post("/form", (req, res) => {
  res.send("This is the POST request");
});

// all requests are accepted
app.all("/hello", (req, res) => {
  res.send("Hello, all requests are accepted ");
});

const PORT = 2222;

app.listen(PORT, () => {
  console.log("Server is listening on PORT: " + PORT);
});
