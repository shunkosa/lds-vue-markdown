<template>
  <div id="app">
    <Home v-if="!isLogin" />
    <Editor v-if="isLogin" :user="userData"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Editor from './components/Editor.vue'
import firebase from 'firebase'
export default {
  name: 'app',
  data() {
    return {
      isLogin: false,
      userData: null
    };
  },
  components: {
    Home: Home,
    Editor: Editor
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user =>{
      this.isLogin = (user) ? true : false;
      this.userData = (user) ? user : null;
    });
  }
}
</script>

<style>

</style>
