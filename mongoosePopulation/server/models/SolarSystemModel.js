const mongoose = require('mongoose')
const Schema = mongoose.Schema

const solarSystemSchema = new Schema({
    starName: String, 
    planets: [{type: Schema.Types.ObjectId, ref: 'planet'}] 
})

const SolarSystem = mongoose.model("solarSystem", solarSystemSchema)
module.exports = SolarSystem
