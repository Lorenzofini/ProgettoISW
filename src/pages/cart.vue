<script lang="ts">
import { Games } from "../types"

definePageMeta({
  middleware: ["require-login"]
})


export default defineComponent({
  data() {
    return {
      games: [] as Games[],
      cart: "",
    }
  },
  methods: {
    getcart() {
      $fetch("/api/cart").then(response => this.games = response as Games[])
      console.log(this.games)
    },
  }, 
  mounted() {
    this.getcart()
  }
})
</script>

<template>
  <section>
    <div id="gameName">
      <h2>CARRELLO</h2>
      <article v-for="game in games">
        <h3>{{game.gamename}}</h3><p>{{game.platform}}</p>
        <img :src="'/img/' + game.img" alt="" />
        <p>{{game.price}}€</p>
      </article>
    </div>
  </section>
</template>