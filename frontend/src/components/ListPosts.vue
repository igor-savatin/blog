<template>
    <div>
        <buttonEditPost class="float-right" 
            v-if="isLogged"
            v-bind="{'id':0,title:'',text:''}"
            label="Adicionar Post"
            action="add"
        />
        <p></p>
        
        <p v-if="posts.length === 0">Nenhum Post!</p>
        <b-container  v-for="(post,index) in posts" v-bind:key="index" v-bind:id="'cnt_'+index">
            <div class="row">
                <h3>{{post.title}}</h3>
                <buttonEditPost 
                    v-if="isLogged" 
                    v-model="post[index]" 
                    v-bind='post'
                    label="Atualizar Post"
                    action="update"
                />
                <buttonEditPost 
                    v-if="isLogged" 
                    v-model="post[index]" 
                    v-bind='post'
                    label="Deletar Post"
                    action="delete"
                />
            </div>
            <p class="text">
                {{post.text | truncate(200)}} 
                <a href="#">Read more</a> 
            </p>
        </b-container>
        
  </div>
</template>

<script>
import buttonEditPost from './buttonEditPost'
import { mapState, mapActions } from 'vuex';

export default {
    name: 'ListPosts',
    
    components: {
        buttonEditPost
    },
    computed: mapState({        
            isLogged: state => state.isLogged,
            posts: state => state.posts
    }),
    methods: {
        ...mapActions(['loadPosts'])
    },    
    mounted(){
        this.loadPosts()
    },beforeUpdated(){
        console.log('updated');
    }
   
}
</script>

<style scoped>
h3 {
    text-align: left;
    /* display: inline-block; */
    margin: 0;
}
.text {
    text-align: left;
}
</style>