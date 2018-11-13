<template>
  <div id="app">
    <Home v-if="!isLogin" />
    <Editor v-if="isLogin" :user="userData"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Editor from './components/Editor.vue'
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
      console.log(user);
      this.isLogin = (user) ? true : false;
      this.userData = (user) ? user : null;
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
