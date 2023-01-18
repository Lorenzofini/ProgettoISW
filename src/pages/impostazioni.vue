<script lang="ts">
import { tSParenthesizedType } from "@babel/types";
import { Gamedel } from "../types"

export default defineComponent({
  data() {
    return {
        gamename: "",
        platform: "",
        trailer: "",
        relasedate: "",
        price: "",
        namekind: "",
        rate: "",
        img: "",
        gameid: "",
        datiGames: [] as Gamedel[]
    }
  },
  methods: {
    add(){
        $fetch("/api/add", {
        method: "POST",
        body: {
          Gamename: this.gamename,
          Platform: this.platform,
          Trailer: this.trailer,
          Relasedate: this.relasedate,
          Price: this.price,
          Rate: this.rate,
          Img: this.img,
          Namekind: this.namekind
        }
      })
    },
    delet(){
      $fetch("/api/delete/del", {
        method: "POST",
        body: {
          Gameid: this.gameid,
        }
      })
    },
    getALLgames() {
      $fetch("/api/delete").then(response => this.datiGames = response as Gamedel[])
    }
  },
  mounted() {
    this.getALLgames()
  }
})
</script>
<template>
    <form class="aggiungi">
        <input type="text" placeholder="gamename" v-model="gamename">
        <input type="text" placeholder="platform" v-model="platform">
        <input type="text" placeholder="trailer" v-model="trailer">
        <input type="text" placeholder="relasedate" v-model="relasedate">
        <input type="text" placeholder="price" v-model="price">
        <input type="text" placeholder="rate" v-model="rate">
        <input type="text" placeholder="img" v-model="img">
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
    <form>
      <select v-model="gameid">
        <option  v-for="game in datiGames" :value ="game.idgame">{{game.gamename}}</option>
      </select>
      <input id="submit" type="button" value="Elimina" @click=delet()>
    </form>
</template>
