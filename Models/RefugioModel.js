const mongoose = require('mongoose')

const { RefugioSchema } = require('../Schemas/RefugioSchema')

const Refugio = mongoose.model('Refugio', RefugioSchema)

module.exports = { Refugio }
