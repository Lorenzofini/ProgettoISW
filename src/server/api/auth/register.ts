import bcrypt from "bcrypt"
import { codificaUtente, decodificaUtente, requireLogout } from "~/server/utils/auth"
import { createConnection } from "~/server/utils/db"

export default defineEventHandler(async function(event) {
  // Blocca la richiesta se l'utente ha già effettuato il login
  const utente = decodificaUtente(event)
  requireLogout(utente)

  // Estrae username e password dal body della richiesta
  const { username, password, nome } = await readBody(event)

  // Verifica che l'username sia disponibile
  const connection = await createConnection()
  const [users] = await connection.execute(
    "SELECT username FROM login WHERE username=?",
    [username]
  )
  if ((users as any[]).length > 0) {
    throw createError({ statusCode: 400, statusMessage: "Username già in uso"})
  }

  // Crea l'hash della password per non salvarla in chiaro
  const passwordHash = await bcrypt.hash(password, 10)
  
  // Inserisce l'utente nel database
  if(nome == 'venditore' || nome == 'Venditore') {
    await connection.execute(
      `INSERT INTO login (username, password, name, active)
       VALUES (?, ?, ?, 1)`,
      [username, passwordHash, nome]
    )
  }
  else {
    await connection.execute(
      `INSERT INTO login (username, password, name, active)
       VALUES (?, ?, ?, 0)`,
      [username, passwordHash, nome]
    )
  }

  // Estrae i dati per il nuovo utente
  const [results] = await connection.execute(
    `SELECT idlogin, username, name, "" AS argomenti FROM login WHERE username=?`,
    [username]
  )
  const user = (results as any)[0] as any

  // Crea un JWT contenente i dati dell'utente e lo imposta come cookie
  codificaUtente(event, user)

  return { message: "Registrazione effettuata con successo" }
})
