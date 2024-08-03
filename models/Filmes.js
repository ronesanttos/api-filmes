const mongoose = require('mongoose')

const Filmes = mongoose.model('Filmes', {
    title: String,
    desc: String,
    img_url: String,
    trailer: String,
})

module.exports = Filmes