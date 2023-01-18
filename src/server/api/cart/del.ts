import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function (event) {
  
    const { Gameid } = await readBody(event)
    const connection = await createConnection()
    await connection.execute(
      `DELETE FROM ordine WHERE idgame = ? ;`,
    [Gameid])
})