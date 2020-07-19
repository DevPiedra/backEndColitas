const mongoose = require('mongoose')
const URL_MONGO = 'mongodb+srv://admin:admin07@cluster0.wg2v9.azure.mongodb.net/colitasdb?retryWrites=true&w=majority'
const { Mascota } = require('./Models/MascotaModel')
const { Refugio } = require('./Models/RefugioModel')

mongoose.connect(URL_MONGO, { useUnifiedTopology: true, useNewUrlParser: true }, function(err) {
  if (!err) {
    console.log('Conexion exitosa')
  }
})

module.exports = { Mascota, Refugio }
