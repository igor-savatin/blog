<template>
    <div id="buttonAddPost">
        <b-button variant="success" v-b-modal="'modal-add-'+id" v-bind:id="'btn-modal-add-'+id">
            <b-icon icon="plus-square"/> Adicionar Post
        </b-button>
        <b-modal v-bind:id="'modal-add-'+id" v-bind:title="title" >
            <template #modal-header>
                <p>
                    Titulo Post:
                    <input placeholder="Digite o titulo" type="text" v-model="newPost.title" v-bind:id="'input-add-'+id">
                </p>
            </template>
            <b-form-textarea
                v-bind:id="'textarea-add-'+id"
                placeholder="Digite o Post..."
                rows="6"
                max-rows="10"
                v-bind:value=text
                v-model="newPost.text"
            >
            
            </b-form-textarea>
            <template v-slot:modal-footer="{ cancel }">
                <p v-if="feedback" style="color:green "><b-icon icon="check" variant="success"> </b-icon> Post criado!</p>
                
                <b-button v-else size="sm" variant="success" @click="addPost(newPost)">Criar Post</b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                Cancelar
                </b-button>
            </template>
        </b-modal>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        name:'buttonAddPost',
        props:{
            id: Number,
            title: String,
            text: String
        },
        data() {
            return {
                newPost: {
                    id: this.id,
                    title: this.title,
                    text: this.text
                },
                feedback: Boolean
            }
        },
        methods :{
            ...mapActions(['insertPost','loadPosts'])
            ,addPost(newPost) {
                this.insertPost(newPost)
                this.loadPosts
                this.feedback=true
                setTimeout(() => this.feedback=false, 3000)
            }
        },
        mounted(){
            this.feedback=false
        }
    }
</script>

<style scoped>

</style>