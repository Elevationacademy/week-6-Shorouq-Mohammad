const express = require('express')
const router = express.Router()

const Person = require('../models/Person')

router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})

router.post('/person', function(req, res){
    const pInfo = req.body
    const p = new Person({firstName: pInfo.firstName, lastName: pInfo.lastName, age: pInfo.age})
    p.save()
    res.end()
})

router.put('/person/:id', function(req, res){
    const id = req.params.id
    Person.findByIdAndUpdate(id, {age: 80}, {new:true},function(err, person){
        res.send(person)
    })
})

router.delete('/apocalypse', function(req, res){
    Person.find({}, function(err, people){
        Person.remove(function(error){
            console.log(error)
            res.send("Delete is complete!")
        })
    })
})

module.exports = router
