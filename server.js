const express = require('express')
const bodyParser = require('body-parser')
const { Mascota, Refugio } = require('./connect')

const PORT = 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Create end-points CRUD to "mascotas"
//Create
app.post('/create/mascota', function(req, res) {
    const { nombre, raza, edad, sexo, vacunas, peso } = req.body
    const nuevaMascota = Mascota({
    nombre,
    raza,
    edad,
    sexo,
    vacunas,
    peso
    })
    nuevaMascota.save(function(err, mascota) {
    if (err) {
        res.status(409).send(err)
    } else {
        res.status(201).send(mascota)
    }
    })
})

//Read all
app.get('/all/mascotas', function(req, res) {
    Mascota.find()
    .exec()
    .then(function(mascotas) {
        res.send(mascotas)
    })
})

//Read  by id Mascotas
app.get('/mascota/:id', function(req, res) {
    const { id } = req.params
    Mascota.findById(id)
    .exec()
    .then(function(mascota) {
        res.send(mascota)
    })
    .catch(function() {
        res.send(error)
    })
})

//Update Mascostas

app.put('/update/mascotas/:id', function(req, res) {
    const { id } = req.params
    Mascota.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .exec()
    .then(function(mascota) {
        res.send(mascota)
    })
    .catch(function(error) {
        res.send(error)
    })
})

//Delete Mascotas

app.delete('/mascota/delete/:id', function(req, res) {
    const { id } = req.params
    Mascota.findOneAndDelete(id)
    .exec()
    .then(function(mascota) {
        res.send(`Se elimino la mascota con el id ${id} correctamente`)
    })
    .catch(function(error) {
        res.send
    })
})

//Create end-points CRUD to "refugios"
//Create refugio
app.post('/create/refugio', function(req, res) {
    const { nombre, ubicacion, contacto } = req.body
    const nuevoRefugio = Refugio({
    nombre,
    ubicacion,
    contacto
    })
    nuevoRefugio.save(function(err, refugio) {
    if (err) {
        res.status(409).send(err)
    } else {
        res.status(201).send(refugio)
    }
    })
})

//Read all refugios
app.get('/all/refugio/', function(req, res) {
    Refugio.find()
    .exec()
    .then(function(Refugio) {
        res.send(Refugio)
    })
    .catch(function(error) {
        res.send(error)
    })
})

//Read  by id Mascotas
app.get('/refugio/:id', function(req, res) {
    const { id } = req.params
    Refugio.findById(id)
    .exec()
    .then(function(Refugio) {
        res.send(Refugio)
    })
    .catch(function() {
    res.send(error)
    })
})

//Update refugio
app.put('/update/refugio/:id', function(req, res) {
    const { id } = req.params
    Refugio.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .exec()
    .then(function(Refugio) {
        res.send(Refugio)
    })
    .catch(function(error) {
        res.send(error)
    })
})

//Delete refugio
app.delete('/delete/refugio/:id', function(req, res) {
    const { id } = req.params
    Refugio.findOneAndDelete(id)
    .exec()
    .then(function(Refugio) {
        res.send(`Se elimino el refugio con el id ${id}`)
    })
    .catch(function(error) {
        res.send
    })
})

//Listen PORT
app.listen(PORT, function() {
    console.log(`Colitas se esta escuchando en el puerto ${PORT}`)
})
