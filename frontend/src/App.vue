<template>
  <div id="app">
    <Header nameBlog="teste"/>
    <br>
    <b-container>
      <b-row align-v="stretch">
        <b-col cols="10">
          <b-container>
            <b-container  class="container" style="color:black;height: 100px;width: 800px; border:1px solid black;">
              aqui
            </b-container>
          <br>
            <b-container fluid class="posts container">
              
              <ListPosts/>
            </b-container>
          </b-container>
        </b-col>
        <b-col>
          <b-container  class="container" style="color:black;height: 800px;width: 100px; border:1px solid black;">
            aqui
          </b-container>
        </b-col>
      </b-row>
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
