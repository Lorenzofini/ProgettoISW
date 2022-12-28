<template>
  <header>
    <h1><a href="/">Game Shop</a></h1>
    <form class="modulo-ricerca">
      <input id="search" type="text" placeholder="Cerca nel sito" required>
      <input id="submit" type="submit" value="CERCA">
    </form>
    <a href="/api/login"><img class="login" src="/img/login.png" /></a>
    <a href="/api/shop"><img class="shop" src="/img/shop.png" /></a>
  </header>
  <main>
    <NuxtPage />
  </main>
  <footer>
    <p>Progetto - Agostini A. Fini L. 2022/2023</p>
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
