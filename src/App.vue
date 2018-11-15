<template>
  <div id="app">
    <div class="slds-spinner_container" v-if="isWaitingStateChanged">
      <div role="status" class="slds-spinner slds-spinner_brand slds-spinner_large">
        <span class="slds-assistive-text">Loading</span>
        <div class="slds-spinner__dot-a"></div>
        <div class="slds-spinner__dot-b"></div>
      </div>
    </div>
    <Home v-if="!isLogin"/>
    <Editor v-if="isLogin" :user="userData"/>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Editor from "./components/Editor.vue";
import firebase from "firebase";
export default {
  name: "app",
  data() {
    return {
      isLogin: false,
      userData: null,
      isWaitingStateChanged: true
    };
  },
  components: {
    Home: Home,
    Editor: Editor
  },
  created: function() {
    firebase.auth().onAuthStateChanged(user => {
      this.isWaitingStateChanged = false;
      this.isLogin = user ? true : false;
      this.userData = user ? user : null;
    });
  }
};
</script>

<style>
@import "./assets/slds.min.css";
</style>
