const mongoose = require("mongoose")
const URL_MONGO = "mongodb+srv://dapiedra:danielpa@cluster0-c8vti.gcp.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(URL_MONGO,{useNewUrlParser:true},function(err) {
    if (!err){
        console.log('Conexion exitosa')
    }
})

const Schema = mongoose.Schema

const RefugioShema = new Schema({
    nombre: String,
    ubicacion: String,
    telefono: Number, // agregar a server
    bio: String, // agregar a server
    redesSociales: String, // agregar a server
},{timestamps:true})

const Refugio = mongoose.model("Refugio", RefugioSchema)

module.exports = {Refugio}