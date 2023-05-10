const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 

app.get("/musicians", async (req, res) =>{
    let musicians = await Musician.findAll()
    res.json(musicians)
})

// part 2
app.get("/musicians/:id", async (req, res) => {
    let name = req.params.id
    let found = await Musician.findByPk(name)
    res.send(found)
})

// part 3
app.post("/musicians", async (req, res) => {
    let newMusician = await Musician.create(req.body)
    res.json(newMusician)
})

app.put("/musicians/:id", async (req, res) => {
    let updated = await Restaurant.update(req.body, {where: {id: req.params.id}})
    res.json(updated)
})

app.delete("/musicians/:id", async (req, res) =>{
    let deleted = await Restaurant.destroy({where: {id: req.params.id}})
    console.log("Deleted")
    res.json(deleted)
})

module.exports = app;