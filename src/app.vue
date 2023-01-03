<script lang="ts">
import { Utente } from "~/types"

export default defineComponent({
    // Fornisce l'oggetto utente a tutti i componenti dell'applicativo
    provide() {
    return {
      utente: computed(() => this.utente)
    }
  },
  data() {
    return {
      utente: null as Utente | null,
      searchGame: "",
    }
  },
  methods: {
    search(){
      $fetch("/api/search/search", {
        method: "POST",
        body: {
          game: this.searchGame,
        }
      })
        .then((response) => window.location.href = "/game/" + response)
        .catch((e) => alert(e))
    },
    async getUtente() {
      const utente = await $fetch("/api/auth/profilo")
      this.utente = utente
    },
    async logout() {
      await $fetch("/api/auth/logout")
      this.getUtente()
    }
  },
  mounted() {
    this.getUtente()
  }
})
</script>


<template>
  <Head>
    <Title>Game Shop</Title>
    <Meta name="description" content="Game Shop" />
  </Head>
  <header>
    <h1><NuxtLink to="/">Game Shop</NuxtLink></h1>
    <form class="modulo-ricerca">
      <input id="search" type="text" placeholder="Cerca nel sito" v-model="searchGame">
      <input id="submit" type="button" value="cerca" @click=search()>
    </form>
    <!--Mostra il link alla pagina di login se l'utente non è autenticato (!utente)-->
    <NuxtLink v-if="!utente" to="/login"><img class="login" src="/img/login.png" alt="Login"/></NuxtLink>
    <NuxtLink v-else to="/" @click.prevent="logout"><img class="logout" src="/img/logout.png" alt="Logout"/></NuxtLink>
    <!--Mostra il tasto di logout altrimenti-->
    <NuxtLink to="/cart"><img class="shop" src="/img/shop.png"/></NuxtLink>
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer>
    <p>Progetto Ingegneria dei Sistemi Web - Agostini A. Fini L. 2022/2023</p>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(219, 69, 83);
  background-color: #fff;
}
</style>

<style lang="css">
@import "./styles/style.css";
</style>
