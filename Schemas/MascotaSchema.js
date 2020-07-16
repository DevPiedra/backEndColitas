const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MascotaSchema = new Schema(
  {
    nombre: String,
    raza: {
      type: String,
      enum: [
        'Beagle',
        'Bloodhound',
        'Bull Terrier',
        'Bulldog americano',
        'Collie',
        'Dalmata',
        'Dachshund',
        'Dobermann',
        'Fox Terrier',
        'Husky Siberiano',
        'Labrador',
        'Maltes',
        'Pastor aleman',
        'Pekines',
        'Pinscher miniatura',
        'Pitbull',
        'Pug',
        'Rottweiler',
        'Schnauzer',
        'Shih Tzu',
        'Terrier',
        'Zagua'
      ],
      required: true,
    },
    edad: {
      type: Number,
      // Como convertir agregar años, meses dias!
      date: Date,
      required: true
    },
    sexo: {
      type: String,
      enum: ['M', 'H'],
      required: true
    },
    vacunas: {
        nombre: String,
        // Falta mejorar el tipado de fecha
        // date: {
        //   type: Date,
        //   default: Date.now,
        //   required: false
        // }
    },
    peso: Number,
    bio: String,
    refugio: String
  },
  { timestamps: true }
)

module.exports = { MascotaSchema }