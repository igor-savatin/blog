<template>
    <div id="buttonEditPost">
        <b-button v-if="action==='update'" variant="primary" v-b-modal="'modal-'+id" v-bind:id="'btn-modal-'+id">
            <b-icon icon="pencil-square"/>  {{label}}
        </b-button>
        <b-button v-if="action==='add'" variant="success" v-b-modal="'modal-'+id" v-bind:id="'btn-modal-'+id">
            <b-icon icon="plus-square"/> {{label}}
        </b-button>
        <b-button v-if="action==='delete'" variant="danger" v-bind:id="'btn-modal-'+id" @click="deletePost(id)">
            <b-icon icon="x-circle"/> {{label}}
        </b-button>
        <!-- The modal -->
        <b-modal v-bind:id="'modal-'+id" v-bind:title="title" >
            <template #modal-header>
                <p>
                    Titulo Post:
                    <input placeholder="Digite o titulo" type="text" v-model="newPost.title" v-bind:id="'input-'+id">
                </p>
            </template>
            <b-form-textarea
                v-bind:id="'textarea-'+id"
                placeholder="Digite o Post..."
                rows="6"
                max-rows="10"
                v-bind:value=text
                v-model="newPost.text"
            >
            
            </b-form-textarea>
            <template v-slot:modal-footer="{ cancel }">
                <!-- <b-button size="sm" variant="success" @click="updatePost(newPost)"> -->
                <b-button v-if="newPost.id" size="sm" variant="success" @click="updatePost(newPost)">Salvar</b-button>
                <b-button v-else size="sm" variant="success" @click="insertPost(newPost)">Criar Post</b-button>
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
        text: String,
        label: String,
        action: String
    },
    data() {
        return {
            newPost: {
                id: this.id,
                title: this.title,
                text: this.text
            }   
        }
    },
    methods :{
        ...mapActions(['updatePost','insertPost','deletePost'])
    }
}
</script>

<style scoped>
p {
    font-size:25px;
}
</style>