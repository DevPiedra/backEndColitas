const mongoose = require("mongoose")
const URL_MONGO = "mongodb+srv://dapiedra:danielpa@cluster0-c8vti.gcp.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(URL_MONGO,{useNewUrlParser:true},function(err) {
    if (!err){
        console.log('Conexion exitosa')
    }
})

ingreso de rama