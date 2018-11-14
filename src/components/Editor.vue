<template>
    <article class="slds-card slds-m-around_large">
        <div class="slds-card__header slds-grid">
            <header class="slds-media slds-media_center slds-has-flexi-truncate">
                <div class="slds-media__figure">
                    <span class="slds-icon_container slds-icon-action-edit slds-icon_container--circle">
                        <img class="slds-icon_small" src="../assets/icons/edit_60.png" />
                    </span>
                </div>
                <div class="slds-media__body">
                    <h2 class="slds-card__header-title">
                        <span class="slds-card__header-link">Editor</span>
                    </h2>
                </div>
                <div class="slds-no-flex">
                    <button class="slds-button slds-button_neutral" @click="logout">Logout</button>
                </div>
            </header>
        </div>
        <div class="slds-card__body slds-card__body_inner">
            <span>logged in as : {{ user.email }}</span>
            <div class="slds-grid slds-gutters slds-p-top_medium">
                <div class="slds-col sld-size_1-of-6">
                    <!--TODO: List here-->
                </div>
                <div class="slds-col slds-size_5-of-12">
                    <textarea class="slds-textarea" rows="20" v-model="markdown"/>
                </div>
                <div class="slds-col slds-size_5-of-12">
                    <Preview :markdown="markdown" />
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import firebase from "firebase";
import Preview from './Preview.vue'
export default {
  name: "editor",
  props: ["user"],
  data() {
    return {
      markdown: ""
    };
  },
  components:{
      Preview: Preview
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style scoped>
@import "../assets/slds.min.css";
</style>