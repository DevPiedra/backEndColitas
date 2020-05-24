const mongoose = require('mongoose')

const Schema = mongoose.Schema

const RefugioSchema = new Schema(
  {
    nombre: String,
    ubicacion: String,
    telefono: Number,
    bio: String,
    redesSociales: String
  },
  { timestamps: true }
)

module.exports = { RefugioSchema }
