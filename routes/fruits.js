const express = require("express");
const router = express.Router();

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get("/", (req, res) => {
    res.json(fruits)
})

router.get("/:id", (req, res) => {
    const fruit = fruits[req.params.id - 1];
    res.json(fruit)
})

router.post("/", (req, res) => {
    const {name, color} = req.body;
    fruits.push({name, color});
    res.json(fruits);
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const {name, color} = req.body;
    fruits[id] = {name, color};
    res.json(fruits[id]);
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    fruits.splice(id, 1);
    res.json(fruits);
})

module.exports = router;