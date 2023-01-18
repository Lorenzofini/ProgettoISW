import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function (event) {
  
    const { Gameid } = await readBody(event)
    const connection = await createConnection()
    await connection.execute(
      `DELETE FROM kind_of_game WHERE game = ? ;`,
    [Gameid])
    await connection.execute(
      `DELETE FROM image WHERE game = ? ;`,
    [Gameid])
    await connection.execute(
        `DELETE FROM game WHERE idgame = ? ;`,
      [Gameid])
})