const router = require('express').Router()
const Filmes = require('../models/Filmes')

// criar dados

router.post('/', async (req,res) => {
    const {title, desc, img_url, trailer_url} = req.body

    const filmes = {
        title,
        desc,
        img_url,
        trailer_url
    }
    try {
        await Filmes.create(filmes)
        res.status(201).json({msg: 'Filme inserido com sucesso!'})
    }
    catch (err) {
        res.status(500).json({err: 'Erro'})
    }
})

//ler dados

router.get('/', async(req,res) => {
    try {
        const filmes = await Filmes.find({})
        res.status(200).json(filmes)
    }
    catch (err) {
        res.status(500).json({err: 'erro'})
    }
})

module.exports = router
