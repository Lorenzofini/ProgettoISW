import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function (event) {
  
    const connection = await createConnection()
    await connection.execute(
      `DELETE FROM ordine;`,
    )
    return { message: "Acquisto completato" }
})