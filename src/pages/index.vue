<script lang="ts">
import { Games } from "../types"

export default defineComponent({
  data() {
    return {
      datiGames: [] as Games[]
    }
  },
  methods: {
    getALLgames() {
      $fetch("/api/games").then(response => this.datiGames = response as Games[])
    }
  },
  mounted() {
    this.getALLgames()
  }
})
</script>

<template>
  <GameItem  v-for="game in datiGames" :game="game" />
</template>
