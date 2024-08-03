const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//rotas
const filmesRoutes = require('./routes/rotasFilmes')
app.use('/filmes', filmesRoutes)

app.get('/', async (req, res) => {
    res.json({ msg: 'Api Ok' })
})

mongoose.connect('mongodb://localhost:27017/filmesDb')
    .then(() => {
        console.log('Conectado ao mongo')
        app.listen(port, () => {
            console.log('Ok')
        })
    })
    .catch((err) => console.log('Não conectado'))



    //iniciar com npm run start