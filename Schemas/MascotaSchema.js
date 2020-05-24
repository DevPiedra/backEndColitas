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
        'Dálmata',
        'Dachshund',
        'Dobermann',
        'Fox Terrier',
        'Husky Siberiano',
        'Labrador',
        'Maltés',
        'Pastor alemán',
        'Pekinés',
        'Pinscher miniatura',
        'Pitbull',
        'Pug',
        'Rottweiler',
        'Schnauzer',
        'Shih Tzu',
        'Terrier'
      ],
      required: true,
      default: 'CasiZagua'
    },
    edad: {
      type: Number,
      date: Date,
      required: true
    },
    sexo: {
      type: String,
      enum: ['F', 'M', 'O'],
      required: true
    },
    vacunas: [
      {
        nombre: String,
        date: {
          type: Date,
          default: Date.now,
          required: true
        }
      }
    ],
    peso: Number,
    bio: String,
    refugio: String
  },
  { timestamps: true }
)

module.exports = { MascotaSchema }
