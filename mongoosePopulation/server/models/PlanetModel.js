const mongoose = require('mongoose')
const SolarSystem = require('./SolarSystemModel')
const Schema = mongoose.Schema

const planetSchema = new Schema({
    name: String, 
    system: {type: Schema.Types.ObjectId, ref: 'solarSystem'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'visitor'}]  
})

const Planet = mongoose.model("planet", planetSchema)
module.exports = Planet
