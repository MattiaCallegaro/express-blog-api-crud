//importo il file postList
const posts = require('../data/postsList.js')


//index
function index(req, res){
    //visualizzo la lista posts in formato json
    res.json(posts)
}

//show
function show(req, res){
    const id = parseInt(req.params.id)
//visualizzo il singolo post in base all'id
    const post = posts.find(post => post.id === id)
// console.log(id)
    res.json(post)
}

//store
function store(req, res){
    res.send("Creao un nuovo post")
}

//update
function update(req, res){
    res.send(`Modifica totale del post ${req.params.id}`)
}

//modify
function modify(req, res){
    res.send(`Modifica parziale del post ${req.params.id}`)
}

//destroy
function destroy(req, res){
    res.send(`Eliminazione del post ${req.params.id}`)
}

module.exports = {index, show, store, update, modify, destroy}