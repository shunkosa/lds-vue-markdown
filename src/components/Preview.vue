<template>
     <div class="markdown-body" v-html="preview()"></div> 
</template>

<script>
import marked from 'marked'
export default {
    name: "preview",
    props: ["markdown"],
    methods: {
    preview: function() {
      return marked(this.markdown);
    }
  }
}
</script>

<style>
@import "../assets/github-markdown.css";
.markdown-body ol,
.markdown-body ul {
    list-style: unset !important;
}
</style>
