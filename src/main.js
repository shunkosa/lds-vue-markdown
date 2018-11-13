import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyD_e_MoFjLaujCsyoStxCXh-0j-neAbphw",
  authDomain: "mymarkdown-fd781.firebaseapp.com",
  databaseURL: "https://mymarkdown-fd781.firebaseio.com",
  projectId: "mymarkdown-fd781",
  storageBucket: "mymarkdown-fd781.appspot.com",
  messagingSenderId: "759595280352"
};
firebase.initializeApp(config);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
