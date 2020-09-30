<template>
    <div>
        
        <!-- <b-button class="float-right" v-if="$store.state.isLogged">Adicionar Post</b-button> -->
        <p></p>
        <!-- <ModalAlterPost v-model="post[index]" v-bind:idPost='post'/> -->
        <b-container  v-for="(post,index) in $store.state.posts" :key="post.id" v-bind:id="'cnt_'+index">
            <div class="row">
                <h3>{{post.title}}</h3>
                <buttonEditPost v-if="$store.state.isLogged" v-model="post[index]" v-bind:Post='post'/>
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

export default {
    name: 'ListPosts',
    components: {
        buttonEditPost
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