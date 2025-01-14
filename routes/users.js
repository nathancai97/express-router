const express = require("express");
const router = express.Router();

let users = [
  {
    name: "User 1",
    age: 30,
  },
  {
    name: "User 2",
    age: 45,
  },
  {
    name: "User 3",
    age: 27,
  },
  {
    name: "User 4",
    age: 22,
  },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users[req.params.id - 1];
  res.json(user);
});

router.post("/", (req, res) => {
  const { name, age } = req.body;
  users.push({ name, age });
  res.json(users);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { name, age } = req.body;
  users[id] = { name, age };
  res.json(users[id]);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json(users);
})

module.exports = router;
