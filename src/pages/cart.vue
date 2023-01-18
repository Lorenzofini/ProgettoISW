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
      <h2>CARRELLO</h2>
      <section v-for="game in games">
<<<<<<< HEAD
        <h3>{{game.gamename}}</h3><p>{{game.platform}}</p>
        <img :src="'/img/' + game.img" alt="" />
        <p>{{game.price}}€</p>
        <p>Quantità:{{ game.quantità }}</p>
      </section>
    </div>
=======
        <img :src="'/img/' + game.img" alt="" />
        <div>
          <h3>{{game.gamename}}</h3><p>{{game.platform}}</p>
        </div>
        <div id="price">
          <p>{{game.price}}€</p>
        </div>
        <hr>
      </section>
>>>>>>> a7d13b44461491d4c636e45d060804322d4a59de
  </section>
  <section>
    <h3>Totale €</h3>
  </section>
</template>