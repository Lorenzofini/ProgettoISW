import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function(event) {
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT idgame, gamename, platform, relasedate, trailer, price, rate, img, namekind
    FROM game INNER JOIN  image
    ON game.idgame = image.game
    INNER JOIN kind_of_game
    ON kind_of_game.game = game.idgame
    INNER JOIN kind
    ON kind.idkind = kind_of_game.kind
    WHERE idgame=?`,
    [event.context.params.idGame]
  )
  return results
})

