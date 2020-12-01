const mongoose = require('mongoose')
const Schema = mongoose.Schema

const visitorSchema = new Schema({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'planet'},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'planet'}] 
})

const Visitor = mongoose.model("visitor", visitorSchema)
module.exports = Visitor
