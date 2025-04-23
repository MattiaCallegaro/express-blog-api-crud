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
    //creo un nuovo id partendo dall'ultimo e incrementandolo
    const newId = posts[posts.length -1].id +1

    // creo un nuovo oggetto post
    const newPost = {
        title: newId,
        content:req.body.content,
        image:req.body.image,
        tags:req.body.tags 
    }

    //aggiungo il nuovo post a postList
    posts.push(newPost)
    //controllo in console
    console.log(posts)

    //restituisco lo status 201 per le nuove risorse create
    res.status(201)
    //restituisco il post creato in json
    res.json(newPost)

}

//update
function update(req, res){
    //recupero id e lo trasformo in numero
    const id = parseInt(req.params.id)
    //cerco il post tramite id
    const post = posts.find(post => post.id === id)

    //controllo se non trovo post restituisco status 404, errore e messaggio
    if(!post){
        res.status(404);
        
        return res.json({
            error: "Not found",
            message: "Post non trovato"
        })
    }

    //aggiorno il post
    post.title = req.body.title
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags
    //contollo i posts in console
    console.log(posts)
    //mostro su postman il post aggiornato
    res.json(post)
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