//creo una funzione per gestire gli errori tramite middleware
function errorsHandler(err, req, res, next){
    //restituisco lo status
    res.status(500)
    //ritorno come risposta json un errore
    res.json({
        error: err.message,
    })

}

module.exports = errorsHandler