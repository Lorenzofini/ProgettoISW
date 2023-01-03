import bcrypt from "bcrypt"
import { createConnection } from "~/server/utils/db"


export default defineEventHandler(async function(event) {

    const { game } = await readBody(event)
  
    const connection = await createConnection()
    const [results] = await connection.execute(
      `SELECT idgame, gamename, platform, relasedate, price, rate, img, namekind
      FROM game INNER JOIN  image
      ON game.idgame = image.game
      INNER JOIN kind_of_game
      ON kind_of_game.game = game.idgame
      INNER JOIN kind
      ON kind.idkind = kind_of_game.kind;`,
      [game]
    )
  
    // Errore se l'utente non è stato trovato
    if (!Array.isArray(results) || results.length == 0) {
      throw createError({ statusCode: 400, statusMessage: "Nome errate"})
    }
    
    let i = 0
  
    for (const name in results){
        i = i + 1
        if (game == results[i].gamename){
            return  String(results[i].idgame)
        }
    }

    
    throw createError({ statusCode: 400, statusMessage: "Nome errato"})
   
    
  
})