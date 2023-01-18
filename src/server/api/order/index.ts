import { createConnection } from "~/server/utils/db"
import { decodificaUtente, requireLogin } from "../../utils/auth"

export default defineEventHandler(async function (event) {
    const user = decodificaUtente(event)
    requireLogin(user)
    
    const date = new Date()
    const orderdate = date.getFullYear() + "/" + (date.getMonth() + 1).toString().padStart(2, "0") + "/" + date.getDate().toString().padStart(2, "0")
    const { cart } = await readBody(event)
    const connection = await createConnection()
    await connection.execute(
        `INSERT INTO ordine (idgame, date, idlogin)
        VALUES (?, ?, ?)`,
        [cart, orderdate, user?.idlogin]
    )
    await connection.execute(
        `INSERT INTO storico (idgame, date, idlogin)
        VALUES (?, ?, ?)`,
        [cart, orderdate, user?.idlogin]
    )
    return { message: "Articlo aggiunto al carrello" }
})