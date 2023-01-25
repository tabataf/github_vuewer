<template>
  <v-app>
    <v-app-bar
      app
      color="pink"
      dark
    >
    <p class="titulo"> VueView 🔎 </p>
      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/tabataf"
        target="_blank"
        text
      >
        <span class="mr-2">Feito por</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
<p class="feito_por"> Feito por </p>
    <v-main>
      <GithubVuewer/>
    </v-main>
  </v-app>
</template>

<script>
import GithubVuewer from './components/GithubVuewer';
export default {
  name: 'App',
  components: {
    GithubVuewer,
  },
  data: () => ({
    //
  }),
};
let root = document.querySelector(":root")
  root.style.setProperty('color-scheme', 'dark')
</script>
<style>
.titulo {
 margin-top: 1rem;
 font-size: 2rem;
 font-weight: 500;
}
:root{
  color-scheme: 'dark';
}
</style>
