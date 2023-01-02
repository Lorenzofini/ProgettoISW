<script lang="ts">
// Applica a questa pagina il middleware creato in ~/middleware/require-logout
// Vedi:
// - https://nuxt.com/docs/api/utils/define-page-meta
definePageMeta({
  middleware: ["require-logout"]
})

export default defineComponent({
  data() {
    return {
      loginUsername: "",
      loginPassword: "",
      registerUsername: "",
      registerPassword: "",
      registerName: ""
    }
  },
  methods: {
    onLoginSubmit() {
      $fetch("/api/auth/login", {
        method: "POST",
        body: {
          username: this.loginUsername,
          password: this.loginPassword,
        }
      })
        .then(() => window.location.href = "/")
        .catch((e) => alert(e))
    },
    onRegisterSubmit() {
      $fetch("/api/auth/register", {
        method: "POST",
        body: {
          username: this.registerUsername,
          password: this.registerPassword,
          nome: this.registerName
        }
      })
        .then(() => window.location.href = "/")
        .catch((e) => alert(e))
    }
  }
})
</script>

<template>
  <h2>Login</h2>
  <form @submit.prevent="onLoginSubmit">
    <ul>
      <li>
        <label for="login-username">Username:</label>
        <input type="text" id="login-username" name="login-username" v-model="loginUsername" />
      </li>
      <li>
        <label for="login-password">Password:</label>
        <input type="password" id="login-password" name="login-password" v-model="loginPassword" />
      </li>
      <li>
        <input type="submit" name="submit" value="Login" />
      </li>
    </ul>
  </form>
  <h2>Registrazione</h2>
  <form @submit.prevent="onRegisterSubmit">
    <ul>
      <li>
        <label for="register-username">Username:</label>
        <input type="text" id="register-username" name="register-username" v-model="registerUsername" />
      </li>
      <li>
        <label for="register-password">Password:</label>
        <input type="password" id="register-password" name="register-password" v-model="registerPassword" />
      </li>
      <li>
        <label for="register-name">Nome:</label>
        <input type="text" id="register-name" name="register-name" v-model="registerName" />
      </li>
      <li>
        <input type="submit" name="submit" value="Registrati" />
      </li>
    </ul>
  </form>
</template>
