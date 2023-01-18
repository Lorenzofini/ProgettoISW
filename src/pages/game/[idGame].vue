<script lang="ts">
import { Games } from "../../types"

export default defineComponent({
  data() {
    return {
     game: null as Games | null,
    }
  },
  methods: {
    getgame() {
      $fetch("/api/game/" + this.$route.params.idGame).then(response => this.game = (response as any)[0])
    },
    sendOrder(gamenumber: number) {
      console.log(gamenumber)
      $fetch("/api/order", {
        method: "POST",
        body: {
          cart: gamenumber
        }
      })
    },
  },
  mounted() {
    this.getgame()
  }
})
</script>

<template>
  <template v-if="game">
    <section>
      <div id="gameName">
        <h2>{{game.gamename}}</h2><div id="rated"><p>Voto: {{game.rate}}/5</p></div>
        <div id="platform"><p>{{game.platform}}</p></div>
      </div>
      <div id="add">
        <img :src="'/img/' + game.img" alt="" />
        <div id="addShop">
          <h3>{{game.price}}€</h3>
          <button type="button" @click="sendOrder(game?.idgame)">AGGIUNGI AL CARRELLO</button>
          <div id="kind"><h4>Genere: </h4><p>{{game.namekind}}</p></div>
          <h4>Rilascio: </h4><p>{{game.relasedate}}</p>
        </div>
      </div>
      <h3>TRAILER</h3>
      <iframe :src="'https://www.youtube.com/embed/' + game.trailer"></iframe>   
    </section>
  </template>
</template>

