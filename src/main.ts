import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/storage'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created: () => {
    const firebaseConfig = {
      apiKey: 'AIzaSyBKGgkiL0Fn0sT7De82KMGK8X1rS_R3Dg8',
      authDomain: 'cborka.firebaseapp.com',
      projectId: 'cborka',
      storageBucket: 'cborka.appspot.com',
      messagingSenderId: '77786305624',
      appId: '1:77786305624:web:b7706bd0632c198c43262d'
    }
    firebase.initializeApp(firebaseConfig)
  }
}).$mount('#app')
