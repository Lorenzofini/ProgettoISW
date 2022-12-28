<script lang="ts">
import { PropType } from "vue"
import { Games } from "../types"

export default defineComponent({
  props: {
    game: {
      type: Object as PropType<Games>,
      required: true
    }
  }
})
</script>

<template>
  <article>
    <a :href="'/game/' + game.idgame">
      <img :src="'/img/' + game.img" alt="" />
      <h3>{{game.gamename}}</h3><p>{{game.platform}}</p>
      <p>{{game.price}}€</p>
    </a>
  </article>
</template>
