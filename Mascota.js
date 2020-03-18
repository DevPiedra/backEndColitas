const mongoose = require("mongoose")
const URL_MONGO = "mongodb+srv://dapiedra:danielpa@cluster0-c8vti.gcp.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(URL_MONGO,{useNewUrlParser:true},function(err) {
    if (!err){
        console.log('Conexion exitosa')
    }
})

const Schema = mongoose.Schema

const MascotaSchema = new Schema({
    nombre: String,
    raza: {
        type: String,
        enum: [ "Beagle", "Bloodhound", "Bull Terrier", "Bulldog americano", "Collie","Dálmata","Dachshund", "Dobermann","Fox Terrier","Husky Siberiano","Labrador","Maltés","Pastor alemán","Pekinés","Pinscher miniatura","Pitbull","Pug","Rottweiler","Schnauzer","Shih Tzu", "Terrier"],
        required: true,
        default: "CasiZagua",
    },
    edad: {
        type: Number,
        date: Date,
        required: true,
    },
    sexo: {
        type: String,
        enum: ["F","M","O"],
        required: true
    },
    vacunas: [{
        nombre: String,
        date: {
            type: Date,
            default: Date.now,
            required: true,
        },
    }],
    peso: Number,
    bio: String, // agregar a server
    refugio: String, // agregar a server
},{timestamps:true})

const Mascota = mongoose.model("Mascota", MascotaSchema)

module.exports = {Mascota}