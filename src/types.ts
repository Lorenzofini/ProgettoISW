export interface Games {
  idgame: number
  gamename: string
  platform: string
  trailer: string
  relasedate: string
  price: number
  rate: number
  img: string
  namekind: string
}

export interface Gamedel {
  idgame: number
  gamename: string
}

export interface Utente {
  idlogin: number
  username: string
  nome: string
  active: number
}