<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header nameBlog="teste"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <b-container class="posts">
      <ListPosts/>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ListPosts from '@/components/ListPosts.vue'

export default {
  name: 'App',
  components: {
    Header,
    ListPosts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.posts {
  border: 1px solid black;

}
</style>
