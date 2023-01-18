<template>
    <form class="modulo-spedizione">
      <input id="name" type="text" placeholder="Nome" v-model="nome"></
      <input id="surname" type="text" placeholder="Cognome" v-model="cognome">
      <input id="address" type="text" placeholder="Indirizzo" v-model="indirizzo">
      <input id="cap" type="text" placeholder="CAP" v-model="cap">
      <input id="numerocarta" type="text" placeholder="Numero della carta" v-model="numerocarta">
      <input id="titolare" type="text" placeholder="Titolare carta" v-model="titolare">
      <input id="codicesicurezza" type="text" placeholder="CVC" v-model="codicesicurezza">
      <input id="datascadenza" type="text" placeholder="Data scadenza" v-model="datascadenza">
      <input id="submit" type="button" value="Conferma pagamento">
    </form>
</template>