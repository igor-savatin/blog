<template>
  <div id="home">
    <Header nameBlog="teste"/>
    <br>
    <b-container>
      <b-row align-v="stretch">
        <b-col cols="11">
          <b-container>
            <b-container  class="container" style="color:black;height: 250px;width: 975px; border:1px solid black;">
              aqui
            </b-container>
          <br>
            <b-container  class="posts container">
              
              <ListPosts/>
            </b-container>
          </b-container>
        </b-col>
        <b-col cols=1>
          <b-container  class="container" style="color:black;height: 600px;width: 300px; border:1px solid black;">
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
  name: 'Home',
  components: {
    Header,
    ListPosts
  }
}
</script>

<style>
#Home {
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
