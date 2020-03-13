const mongoose = require("mongoose")
const URL_MONGO = "mongodb+srv://dapiedra:danielpa@cluster0-c8vti.gcp.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(URL_MONGO,{useNewUrlParser:true},function(err) {
    if (!err){
        console.log('Conexion exitosa')
    }
})

const Schema = mongoose.Schema

const MascotaShema = new Schema({
    nombre: String,
    raza: {
        type: String,
        enum: [ "Beagle", "Bloodhound", "Bull Terrier", "Bulldog americano", "Collie","Dálmata","Dachshund", "Dobermann","Fox Terrier","Husky Siberiano","Labrador","Maltés","Pastor alemán","Pekinés","Pinscher miniatura","Pitbull","Pug","Rottweiler","Schnauzer","Shih Tzu", "Terrier"],
        required: true,
        default: "CasiZagua",
    },
    edad: Number,
    sexo: String,
    vacunas: {

    },
    peso: Number,
    bio: String,
    refugio: String,
})