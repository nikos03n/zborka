<template>
  <div>
    <v-home></v-home>

    <v-flex xs12 class="text-xs-right">
      <body max-height="400">
        <v-menu class="text-xs-right">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on"> Click me </v-btn>
          </template>

          <!-- <v-list>
          <v-list-item @click="method">
            <v-list-item-title>Option 1</v-list-item-title>
          </v-list-item>

          <v-list-item disabled>
            <v-list-item-title>Option 2</v-list-item-title>
          </v-list-item>

          <v-list-item @click="method">
            <v-list-item-title>Option 3</v-list-item-title>
          </v-list-item>
        </v-list> -->
        </v-menu>
      </body>
    </v-flex>
    <v-card style="background-color: #ffffff42"
      ><p>ssggsgsfgf<br />sdfgdwgwdgg<br />sfsdfsdfsf</p></v-card
    >
    <HelloWorld></HelloWorld>
    <vComputedProperties/>
  </div>
</template>

<script>
// import vApp from '@/components/v-app.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import vHome from '@/components/home/v-home.vue'
import vComputedProperties from '@/components/home/v-computed-properties.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    vHome,
    vComputedProperties
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: () => ({})
}
</script>
<style lang="sass" scoped>
body
  background-image: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/icon%2Fice_screenshot_20210421-092705.png?alt=media&token=c2047817-6f83-46a3-aa1a-ce4fd4ba8722")
  background-position: center center
  background-repeat: no-repeat
  background-attachment: fixed
  background-size: cover
  background-color: #464646
</style>
