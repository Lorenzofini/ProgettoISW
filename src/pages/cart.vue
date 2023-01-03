<script lang="ts">
import { Games } from "../types"

definePageMeta({
  middleware: ["require-login"]
})


export default defineComponent({
  data() {
    return {
      game: null as Games | null,
      cart: "",
    }
  },
  methods: {
    getgame() {
      $fetch("/api/game/" + this.$route.params.idGame).then(response => this.game = (response as any)[0])
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
                <img :src="'/img/' + game.img" alt="" />
                <h2>{{game.gamename}}</h2>
                <p>{{game.platform}}</p>
                <p>{{game.price}}€</p>
            </div>
        </section>
    </template>
</template>