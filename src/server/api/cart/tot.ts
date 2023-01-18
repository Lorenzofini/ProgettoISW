import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function () {
    const connection = await createConnection()
    const [results] = await connection.execute(
        `SELECT ordine.idgame, game.gamename, game.price, image.img, game.platform,COUNT(ordine.idgame) as quantità, sum(game.price) as totale
        FROM ordine INNER JOIN game ON ordine.idgame=game.idgame
        INNER JOIN image ON game.idgame=image.game
        WHERE date>=CURDATE()
        GROUP BY ordine.idgame `
    )
      // Errore se l'utente non è stato trovato
    if (!Array.isArray(results) || results.length == 0) {
        throw createError({ statusCode: 400, statusMessage: "Name errate"})
    }

    let i = 0
    let totale = 0
    
    for (const tot in results){
        
        totale = totale + parseInt(results[i].totale)
        i = i + 1
    
    }

    return totale

})