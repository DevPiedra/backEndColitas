const mongoose = require('mongoose')
const { MascotaSchema } = require('../Schemas/MascotaSchema')

const Mascota = mongoose.model('Mascota', MascotaSchema)

module.exports = { Mascota }
