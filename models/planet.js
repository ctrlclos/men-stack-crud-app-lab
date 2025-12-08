const mongoose = require('mongoose')

const planetSchema = {
  name: { type: String, required: true },
  description: String,
  image: String,
  diameter: Number,
  distanceFromSun: Number,
  numberOfMoons: { type: Number, default: 0 },
  hasRings: { type: Boolean, default: false },
  type: {
    type: String,
    enum: ['rocky', 'gas giant', 'ice giant', 'dwarf']
  },
  isFavorite: { type: Boolean, default: false }
}

// model names -> upcase 1st letter
const Planet = mongoose.model('Planet', planetSchema)

module.exports = Planet
