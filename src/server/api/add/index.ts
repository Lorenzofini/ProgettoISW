import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function (event) {
    

    const { Gamename,  Platform, Trailer, Relasedate, Price, Rate, Img, Namekind} = await readBody(event)
    const connection = await createConnection()
    await connection.execute(
        `INSERT INTO game (gamename, platform, trailer, relasedate, price, rate)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [Gamename, Platform, Trailer, Relasedate, Price, Rate])

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

    await connection.execute(
        `INSERT INTO image (img, game)
        VALUES (?, ?)`,
        [Img ,numero])

})


