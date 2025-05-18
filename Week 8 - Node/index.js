const express = require("express");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
// mmiddleware
app.use(express.json());
const Person = [
  {
    name: "Aleena",
    text: "Name is Aleena",
  },
  {
    name: "Joseph",
    text: "Name is Joseph",
  },
];

// To view obj
app.get("/", (req, res) => {
  res.json(Person);
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
app.get("text", authenticateToken, (req, res) => {
  res.json(Person.filter((person) => person.name === req.user.name));
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.ACCESS_KEY, {
    expiresIn: "1hr",
  });
  res.json({ accessToken });
});

//server
app.listen(8080);
console.log("port is running on 8080");
