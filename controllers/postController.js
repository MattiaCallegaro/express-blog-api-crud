//importo il file postList
const posts = require('../data/postsList.js')


//index
function index(req, res){
    //visualizzo la lista posts in formato json
    // res.json(posts)`
    const ingredient = req.query.ingredient;

    let filteredPost = posts;

    if(ingredient){
        filteredPost = posts.filter((post)=> post.tags.includes(ingredient))
    }
    res.json(filteredPost)
}

//show
function show(req, res){
    const id = parseInt(req.params.id)
//visualizzo il singolo post in base all'id dentro l'array che sta in posts
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

    const id = parseInt(req.params.id);
//recupero l'elemento con parametro id
    const post = posts.find(post => post.id === id)
//attraverso splice elimino l'elemento id 1 che ho trovato con indexOf recuperandolo dall'array
    posts.splice(posts.indexOf(post), 1)

    res.sendStatus(204)

    console.log(posts)
}

module.exports = {index, show, store, update, modify, destroy}