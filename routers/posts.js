//importo express
const express = require("express")

//importo la classe router
const router = express.Router()

//index
router.get('/', (req, res) =>{
    res.send("Lista dei post")
})

//show
router.get('/:id', (req, res) => {
    res.send(`Visualizzo il singolo post ${req.params.id}`)
})

//store
router.post('/', (req,res) =>{
    res.send("Creao un nuovo post")
})

//update
router.put('/:id', (req,res) =>{
    res.send(`MOdifica totale del post ${req.params.id}`)
})

//modify
router.patch('/:id', (req,res) =>{
    res.send(`Modifica parziale del post ${req.params.id}`)
})

//destroy
router.delete('/:id', (req,res) =>{
    res.send(`Eliminazione del post ${req.params.id}`)
})


//esporto il router dei post
module.exports = router;