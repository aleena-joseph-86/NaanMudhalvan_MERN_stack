const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/persondb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error", err));

const personSchema = new mongoose.Schema({
  name: String,
  text: String,
});

const Person = mongoose.model("Person", personSchema);

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000;
const SECRET = process.env.ACCESS_KEY;

let persons = [];

// Login Route
app.post("/login", (req, res) => {
  const { username, role } = req.body;
  if (!username || !role)
    return res.status(400).json({ error: "Username and role required" });

  const token = jwt.sign({ username, role }, SECRET, { expiresIn: "1m" });
  res.json({ token });
});

// Middleware for JWT verification
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Token invalid or expired" });
    req.user = user;
    next();
  });
}

// GET /profile
app.get("/profile", authenticateToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.username}` });
});

// POST /add-person - Only admin
app.post("/add-person", authenticateToken, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Access denied: Admins only" });
  }

  const { name, text } = req.body;
  if (!name || !text)
    return res.status(400).json({ error: "Name and text required" });

  try {
    const newPerson = new Person({ name, text });
    await newPerson.save();
    res.json({ message: "Person added", person: newPerson });
  } catch (error) {
    res.status(500);
  }
  persons.push({ name, text });
  res.json({ message: "Person add", persons });
});

// GET /people
app.get("/people", authenticateToken, async (req, res) => {
  const people = await Person.find();
  res.json(people);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
