<template>
    <div id="blogPost">
    
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
                    <b-container fluid class="posts container">
                    <div class="row">
                        <buttonEditPost 
                            v-if="isLogged" 
                            v-model="post[index]" 
                            v-bind='post'
                        />
                        <buttonDeletePost 
                            v-if="isLogged" 
                            v-model="post[index]" 
                            v-bind='post'
                        />
                    </div>
                    <div v-for="(post,index) in posts" v-bind:key="index" v-bind:id="'cnt_'+index">
                        <h1>{{post.title}}</h1>
                        <p>{{post.text}}</p>
                    </div>
                    </b-container>
                </b-container>
            </b-col>
            <b-col cols="1">
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
import buttonEditPost from './buttonEditPost'
import buttonDeletePost from './buttonDeletePost'

import { mapState, mapActions } from 'vuex';
export default {
  name: 'BlogPost',
  props:{
        id: Number
  },
  data(){
      return {
          idPost: this.$route.params.id,
          title: this.post
      }
  },
  components: {
    Header,
    buttonEditPost,
        buttonDeletePost
  },
    computed: mapState({        
            isLogged: state => state.isLogged,
            posts: state => state.posts
    }),
    methods: {
        ...mapActions(['loadOnePost'])
    },
    mounted(){
        // this.loadOnePosts(this.$route.params.id)
        this.loadOnePost(this.idPost)
    }
}
</script>

<style scoped>

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
