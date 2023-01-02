import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function() {
  const connection = await createConnection()
  const [results] = await connection.execute(
    `SELECT idautore, username, nome, password, GROUP_CONCAT(DISTINCT nomecategoria) as argomenti
     FROM autore
     LEFT OUTER JOIN articolo ON autore=idautore
     LEFT OUTER JOIN articolo_ha_categoria ON idarticolo=articolo
     LEFT OUTER JOIN categoria ON categoria=idcategoria
     WHERE attivo=1
     GROUP BY idautore, username, nome, password;`,
  )
  return results
})
