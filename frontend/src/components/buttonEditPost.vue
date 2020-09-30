<template>
    <div id="buttonEditPost">
        <b-button variant="primary" v-b-modal="'modal-'+Post.id" v-bind:id="'btn-modal-'+Post">
            <b-icon icon="pencil"></b-icon> Alterar
        </b-button>
        <!-- The modal -->
        <b-modal v-bind:id="'modal-'+Post.id" v-bind:title="Post.title" >
            <template #modal-header>
                <p>
                    Titulo Post:
                    <input type="text" v-bind:value="Post.title">
                </p>
            </template>
            <b-form-textarea
                id="textarea"
                placeholder="Enter something..."
                rows="6"
                max-rows="10"
                v-model=Post.text
            >
            </b-form-textarea>
            <template v-slot:modal-footer="{ cancel }">
                <b-button size="sm" variant="success" @click="$store.commit('updatePost',Post)">
                Salvar
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                Cancelar
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'buttonEditPost',
    props:{
        Post: {}
    },
    methods :{
        check(){
            console.log(this.Post);
        }
    }
}
</script>

<style scoped>
p {
    font-size:25px;
}
</style>