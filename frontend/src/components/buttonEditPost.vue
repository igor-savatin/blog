<template>
    <div id="buttonEditPost">
        <b-button variant="primary" v-b-modal="'modal-upt-'+id" v-bind:id="'btn-modal-upt-'+id">
            <b-icon icon="pencil-square"/>Atualizar Post
        </b-button>
       
        <!-- The modal -->
        <b-modal v-bind:id="'modal-upt-'+id" v-bind:title="title" >
            <template #modal-header>
                <p>
                    Titulo Post:
                    <input placeholder="Digite o titulo" type="text" v-model="newPost.title" v-bind:id="'input-upt-'+id">
                </p>
            </template>
            <b-form-textarea
                v-bind:id="'textarea-upt-'+id"
                placeholder="Digite o Post..."
                rows="6"
                max-rows="10"
                v-bind:value=text
                v-model="newPost.text"
            >
            
            </b-form-textarea>
            <template v-slot:modal-footer="{ cancel }">
                <p v-if="feedback" style="color:green "><b-icon icon="check" variant="success"> </b-icon> Post atualizado!</p>
                <b-button v-if="!feedback" size="sm" variant="success" @click="atualizarPost(newPost)">Salvar</b-button>
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
    name: 'buttonEditPost',
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
            }   ,
        feedback: Boolean
        }
    },
    methods :{
        ...mapActions(['updatePost','loadPosts'])
        , atualizarPost(newPost) {
            this.updatePost(newPost)
            this.loadPosts()
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
p {
    font-size:25px;
}
</style>