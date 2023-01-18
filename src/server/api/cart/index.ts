import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function () {
    const connection = await createConnection()
    await connection.execute(
        `SELECT storico.idgame, game.gamename, game.price, image.img, game.platform,COUNT(storico.idgame) as quantità, sum(game.price) as totale
        FROM storico INNER JOIN game ON storico.idgame=game.idgame
        INNER JOIN image ON game.idgame=image.game
        WHERE date>=CURDATE()
        GROUP BY storico.idgame `
    )
    const [results] = await connection.execute(
        `SELECT ordine.idgame, game.gamename, game.price, image.img, game.platform,COUNT(ordine.idgame) as quantità, sum(game.price) as totale
        FROM ordine INNER JOIN game ON ordine.idgame=game.idgame
        INNER JOIN image ON game.idgame=image.game
        WHERE date>=CURDATE()
        GROUP BY ordine.idgame `
    )
    return results
})