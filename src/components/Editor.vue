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
                    <div class="slds-text-align_center slds-p-bottom_small">
                        <button class="slds-button slds-button_neutral" @click="addMemo">Add</button>
                        <button class="slds-button slds-button_neutral" @click="deleteSelectedMemo" v-if="memos.length > 1">Delete</button>
                        <button class="slds-button slds-button_neutral" @click="saveMemos">Save</button>
                    </div>
                    <ul class="slds-has-dividers_around-space">
                        <li class="slds-item" 
                        v-for="(memo, index) in memos"
                        :key ="index" @click="selectMemo(index)" 
                        :data-selected="index == selectedIndex">
                            <article class="slds-tile slds-tile_board">
                                <div class="slds-tile__detail">
                                    <p class="slds-text-heading_small slds-truncate">{{  showFirstLine(memo.markdown)  }}</p>
                                    <p><!--Last Modifed Date--></p>
                                </div>
                            </article>
                        </li>
                    </ul>
                </div>
                <div class="slds-col slds-size_5-of-12">
                    <textarea class="slds-textarea" rows="20" v-model="memos[selectedIndex].markdown"/>
                </div>
                <div class="slds-col slds-size_5-of-12">
                    <Preview :markdown="memos[selectedIndex].markdown" />
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
      memos: [{ "markdown" : ""}],
      selectedIndex: 0
    };
  },
  created: function(){
      firebase
        .database()
        .ref("memos/" + this.user.uid)
        .once("value")
        .then(result => { this.memos = result.val(); });
  },
  components:{
      Preview: Preview
  },
  methods: {
    logout: function() {
        firebase.auth().signOut();
    },
    addMemo: function(){
        this.memos.push({"markdown" : "untitled memo"});
    },
    selectMemo: function(index){
        this.selectedIndex = index
    },
    saveMemos: function(){
        firebase.database().ref("memos/" + this.user.uid).set(this.memos);
    },
    deleteSelectedMemo: function(){
        this.memos.splice(this.selectedIndex, 1);
        this.selectedIndex = (this.selectedIndex > 0) ? this.selectedIndex - 1 : this.selectedIndex ;
    },
    showFirstLine: function(text){
        return text.split(/\n/)[0];
    }
  }
};
</script>

<style>
li[data-selected="true"]{
    border-color:#1589ee !important;
}
</style>
