<script lang="ts">
import { del } from "nuxt/dist/app/compat/capi"
import { Games } from "../types"

definePageMeta({
  middleware: ["require-login"]
})


export default defineComponent({
  data() {
    return {
      games: [] as Games[],
      totale: "",
      cart: "",
    }
  },
  methods: {
    getcart() {
      $fetch("/api/cart").then(response => this.games = response as Games[])
      console.log(this.games)
    },
    buy() {
      $fetch("/api/buy").then(window.location.href="/")
    },
    gettot() {
      $fetch("/api/cart/tot").then((response) => this.totale = response)
      console.log(this.games)
    },
    del(id: number){
      $fetch("/api/cart/del", {
        method: "POST",
        body: {
          Gameid: id,
        }
      })
    }
  }, 
  mounted() {
    this.getcart()
    this.gettot()
  }
})
</script>

<template>
<div v-if="games.length>0">
  <section>
      <h2>CARRELLO</h2>
      <NuxtLink to="/storico">Vai allo Storico</NuxtLink>
      <section v-for="game in games">
        <img :src="'/img/' + game.img" alt="" />
        <div>
          <h3>{{game.gamename}}</h3><p>{{game.platform}}</p>
        </div>
        <div id="price">
          <p>{{game.totale}}€</p>
          <p>Quantità:{{ game.quantità }}</p>
          <button id="shop" @click=del(game.idgame)>delete</button>
        </div>
        <hr>
      </section>
  </section>
  <section>
    <h3>Totale {{this.totale}}€</h3>
    <button id="shop" type="button" @click="buy()">ACQUISTA</button>
  </section>
</div>
<div v-else>
  <p>Il carrello è vuoto</p>
</div>
</template>