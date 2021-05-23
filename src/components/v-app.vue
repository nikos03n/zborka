<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/My ads">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>My ads</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Login">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/Registration">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Registration</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/NewAd">
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>NewAd</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="cyan" dark>
      <v-toolbar-items class="my-2">
        <v-btn link to="/" depressed large color="rgb(0 188 212 / 0%)">
          <v-icon left>mdi-set-right</v-icon>Home
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items class="my-2 hidden-sm-and-down">
        <v-btn link to="/Login" depressed large color="#00bcd4">
          <v-icon left>mdi-set-right</v-icon>Login
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="my-2 hidden-sm-and-down">
        <v-btn link to="/Registration" depressed large color="#00bcd4">
          <v-icon left>mdi-set-right</v-icon>Registration
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="my-2 hidden-sm-and-down">
        <v-btn link to="/NewAd" depressed large color="#00bcd4">
          <v-icon left>mdi-set-right</v-icon>NewAd
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="my-2 hidden-sm-and-down">
        <v-btn link to="/My ads" depressed large color="#00bcd4">
          <v-icon left>mdi-set-right</v-icon>My ads
        </v-btn>
      </v-toolbar-items>

      <v-toolbar-items class="my-2 hidden-sm-and-down">
        <v-btn @click="onLogout" v-if="isUserLoggedIn" depressed large color="#00bcd4">
          <v-icon left>exit_to_app</v-icon>Logout
        </v-btn>
      </v-toolbar-items>

      <!-- <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            depressed
            large
            color="primary"
          >
            <v-icon left>{{link.icon}}</v-icon>
            {{link.title}}
          </v-btn>
          <v-btn @click="onLogout" v-if="isUserLoggedIn" color="primary" depressed>
            <v-icon left>exit_to_app</v-icon>Logout
          </v-btn>
        </v-toolbar-items> -->

      <!-- <v-toolbar-title dark color="primary" @click="drawer=!drawer">Application</v-toolbar-title> -->

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer color="cyan" app>
      <v-spacer></v-spacer>

      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <template v-if="error">
        <v-snackbar
          :timeout="5000"
          :multi-line="true"
          color="error"
          @input="closeError"
          :value="true"
        >
          {{error}}
          <v-spacer></v-spacer>
          <v-btn dark @click.native="closeError">Close</v-btn>
        </v-snackbar>
    </template>

  </v-app>
</template>

<script>
export default {
  name: 'LayoutsDemosBaselineFlipped',

  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          { title: 'New Ad', icon: 'note_add', url: '/NewAd' },
          { title: 'My ads', icon: 'list', url: '/My ads' }
        ]
      }

      return [
        { title: 'Login', icon: 'lock', url: '/login' },
        { title: 'Registration', icon: 'face', url: '/registration' }
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.pointer1 {
  background-color: #00bcd4 !important;
}
</style>
