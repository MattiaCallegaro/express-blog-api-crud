//creo una funzione per resituitre il notFound con il middleware
function notFound (req,res, next){
    //restituisco lo stato 
    res.status(404)
    //invio come risposta json un errore e un messaggio
    res.json({
        error:"Not Found",
        message:"Pagina non trovata"
    })
}
//esporto la funzione
module.exports = notFound