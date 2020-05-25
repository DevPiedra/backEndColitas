const mongoose = require('mongoose')
const URL_MONGO =
  'mongodb+srv://dapiedra:danielpa@cluster0-c8vti.gcp.mongodb.net/test?retryWrites=true&w=majority'
const { Mascota } = require('./Models/MascotaModel')
const { Refugio } = require('./Models/RefugioModel')

mongoose.connect(URL_MONGO, { useUnifiedTopology: true, useNewUrlParser: true }, function(err) {
  if (!err) {
    console.log('Conexion exitosa')
  }
})

module.exports = { Mascota, Refugio }
