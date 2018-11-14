<template>
    <div class="slds-text-align_center">
        <h1 class="slds-text-heading_large">{{ msg }}</h1>
        <div class="slds-m-top_medium">
            <button class="slds-button slds-button_neutral" @click="googleLogin">Googleアカウントでログイン</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "home",
    data() {
        return {
            msg : "Vue LDS Markdown"
        };
    },
    methods: {
        googleLogin: function(){
            firebase
                .auth()
                .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
        }
    }
};
</script>

<style scoped>
@import "../assets/slds.min.css";
</style>