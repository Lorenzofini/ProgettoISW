<script lang="ts">
import { tSParenthesizedType } from "@babel/types";
import { Games } from "../types"

export default defineComponent({
  data() {
    return {
        gamename: "",
        platform: "",
        relasedate: "",
        price: "",
        namekind: ""
    }
  },
  methods: {
    add(){
        console.log(this.namekind)
        $fetch("/api/add", {
        method: "POST",
        body: {
          Gamename: this.gamename,
          Platform: this.platform,
          Relasedate: this.relasedate,
          Price: this.price,
          Namekind: this.namekind
        }
      })
    }
  },
  mounted() {
   
  }
})
</script>
<template>
    <form class="aggiungi">
        <input type="text" placeholder="gamename" v-model="gamename">
        <input type="text" placeholder="platform" v-model="platform">
        <input type="text" placeholder="relasedate" v-model="relasedate">
        <input type="text" placeholder="price" v-model="price">
        <select v-model="namekind">
            <option value ="1">Action</option>
            <option value ="2">Adventure</option>
            <option value ="3">Casual</option>
            <option value ="4">Educational</option>
            <option value ="5">Fighting</option>
            <option value ="6">Indie</option>
            <option value ="7">Massively Multiplayer</option>
            <option value ="8">Party</option>
            <option value ="9">Puzzle</option>
            <option value ="10">Racing</option>
            <option value ="11">RPG</option>
            <option value ="12">Shooter</option>
            <option value ="13">Simulation</option>
            <option value ="14">Sports</option>
            <option value ="15">Strategy</option>
            <option value ="16">Visual Novel</option>
            <option value ="17">Board/Card Game</option>
        </select> 
        <input id="submit" type="button" value="aggiungi" @click=add()>
    </form>
</template>
