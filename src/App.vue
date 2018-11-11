<template>
  <div id="app">
    <Home v-if="!isLogin" />
    <Editor v-if="isLogin" />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    Home: Home,
    Editor: Editor
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
