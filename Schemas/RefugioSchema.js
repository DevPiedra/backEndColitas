const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RefugioShema = new Schema(
  {
    nombre: String,
    ubicacion: String,
    telefono: Number, // agregar a server
    bio: String, // agregar a server
    redesSociales: String // agregar a server
  },
  { timestamps: true }
)

module.exports = { RefugioShema }
