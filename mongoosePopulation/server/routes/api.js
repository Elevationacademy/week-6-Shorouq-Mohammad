const express = require('express')
const router = express.Router()

const SolarSystem = require('../models/SolarSystemModel')
const Planet = require('../models/PlanetModel')
const Visitor = require('../models/VisitorModel')

// const s1 = new SolarSystem({
//     starName: "Sun",
//     planets: []
// })
// const p1 = new Planet({
//     name: 'earth',
//     system: s1,
//     visitors: []
// })
// const v1 = new Visitor({
//     name: "shorouq",
//     homePlanet: p1,
//     visitedPlanets: []
// })
// p1.visitors.push(v1)
// v1.visitedPlanets.push(p1)
// s1.planets.push(p1)

// s1.save()
// p1.save()
// v1.save()

// Visitor.findOne({}).populate({
//     path: "visitedPlanets",
//     populate: {path: "visitors"}
// }).exec(function(err, visitor){
//     console.log(visitor)
//     console.log(visitor.visitedPlanets)
//     // console.log(visitor.visitedPlanets);
// })

//Find all the visitors in a system

SolarSystem.findOne({}).populate({
    path: "planets",
    populate: {path: "visitors"}
}).exec(function(err, system){
    system.planets.forEach(p => {
        p.visitors.forEach(v => console.log(v))
    })
})

router.get('/', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

module.exports = router
