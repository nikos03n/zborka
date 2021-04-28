<template>
  <div>
    <v-app></v-app>
    <HelloWorld> </HelloWorld>
  </div>
</template>

<script>
import vApp from '@/components/v-app.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    vApp,
    HelloWorld
  },
  data: () => ({})
}
</script>
