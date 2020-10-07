<template>
    <div id="buttonDeletePost">
        <b-button variant="danger" v-bind:id="'btn-modal-del-'+id" @click="dropPost(id)">
            <b-icon icon="x-circle"/> Deletar Post
        </b-button>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        name:'buttonDeletePost',
        props:{
            id:Number
        },
        methods :{
            ...mapActions(['deletePost','loadPosts']),
            dropPost(id) {
                this.deletePost(id)
                this.loadPosts()
            }
        }
    }
</script>

<style scoped>

</style>