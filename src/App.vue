<template>
  <v-app>
    <v-app-bar
      app
      color="pink"
      dark
    >
    <p class="titulo"> VueView 🔎 </p>
    <!-- <div class="d-flex align-center">
      <v-button @click="root"> 
        alt="Dark"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      </v-button>
    </div>
      <div class="d-flex align-center"> -->
         <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> 

        <v-button
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>  --> 

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
