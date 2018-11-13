<template>
    <div class="editor">
        <span>{{ user.displayName }}</span>
        <h1>Editor</h1>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "editor",
    props: ["user"],
    data() {
        return {};
    },
    methods: {
        logout: function(){
            firebase.auth().signOut();
        }
    }
};
</script>