<template>
  <div id="home">
    <Header nameBlog="teste"/>
    
    <br>
    <b-container>
      <b-row align-v="stretch">
        <b-col cols="9">
          <b-container>
            <BannerTop class="container"/>
            
          <br>
            <b-container  class="posts container">
              
              <ListPosts/>
            </b-container>
          </b-container>
        </b-col>
        <b-col cols=1>
          <BannerSide class="container"/>
          
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import ListPosts from '@/components/ListPosts.vue'
import BannerTop from '@/components/BannerTop.vue'
import BannerSide from '@/components/BannerSide.vue'
export default {
  name: 'Home',
  components: {
    Header,
    ListPosts,
    BannerTop,
    BannerSide
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
