const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.redirect("/login");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});