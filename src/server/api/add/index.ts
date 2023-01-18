import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function (event) {
    

    const { Gamename,  Platform, Relasedate, Price, Namekind} = await readBody(event)
    const connection = await createConnection()
    await connection.execute(
        `INSERT INTO game (gamename, platform, relasedate, price)
        VALUES (?, ?, ?, ?)`,
        [Gamename, Platform, Relasedate, Price])

    const [results] = await connection.execute(
        `SELECT idgame
        FROM game
        ORDER BY idgame DESC LIMIT 1`,
    )

    if (!Array.isArray(results) || results.length == 0) {
        throw createError({ statusCode: 400, statusMessage: "Name errate"})
    }
    
    let numero = results[0].idgame

    await connection.execute(
        `INSERT INTO kind_of_game (game, kind)
        VALUES (?, ?)`,
        [numero, Namekind])

})


