<template>
  <body>
    <v-app>
      <router-view />
    </v-app>
  </body>
</template>

<script>
import vApp from '@/components/v-app.vue'

export default {
  name: 'app',
  components: {
    vApp
  }
}
</script>

<style lang="scss">
#app {
  font-family: Segoe UI Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-right: auto;
  margin-left: auto;
  //max-width: 1020px;
}
</style>
