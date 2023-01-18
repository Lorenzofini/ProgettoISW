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
      $fetch("/api/storico").then(response => this.games = response as Games[])
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
      <h2>Storico ordini</h2>
      <section v-for="game in games">
        <img :src="'/img/' + game.img" alt="" />
        <div>
          <h3>{{game.gamename}}</h3><p>{{game.platform}}</p>
        </div>
        <div id="price">
          <p>{{game.price}}€</p>
          <p>Quantità:{{ game.quantità }}</p>
          <p>In data: {{ game.date }}</p>
        </div>
        <hr>
      </section>
  </section>
</template>