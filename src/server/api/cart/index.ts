import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function () {
    const connection = await createConnection()
    const [results] = await connection.execute(
        `SELECT ordine.idgame, game.gamename, game.price, image.img, game.platform
        FROM ordine INNER JOIN game ON ordine.idgame=game.idgame
        INNER JOIN image ON game.idgame=image.game
        WHERE date>=CURDATE()`
    )
    return results
})