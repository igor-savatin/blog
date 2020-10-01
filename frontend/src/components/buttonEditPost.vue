<template>
    <div id="buttonEditPost">
        <b-button variant="primary" v-b-modal="'modal-'+id" v-bind:id="'btn-modal-'+id">
            <b-icon icon="pencil"></b-icon> Alterar
        </b-button>
        <!-- The modal -->
        <b-modal v-bind:id="'modal-'+id" v-bind:title="title" >
            <template #modal-header>
                <p>
                    Titulo Post:
                    <input type="text" v-model="newPost.title" v-bind:id="'input-'+id">
                </p>
            </template>
            <b-form-textarea
                v-bind:id="'textarea-'+id"
                placeholder="Enter something..."
                rows="6"
                max-rows="10"
                v-bind:value=text
                v-model="newPost.text"
            >
            
            </b-form-textarea>
            <template v-slot:modal-footer="{ cancel,addPost }">
                <b-button size="sm" variant="success" @click="addPost">
                Salvar
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                Cancelar
                </b-button>
            </template>
            {{ newPost }}
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'buttonEditPost',
    props:{
        id: Number,
        title: String,
        text: String,
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
        addPost: ()=>{
            console.log(this.newPost);
        }
    }
}
</script>

<style scoped>
p {
    font-size:25px;
}
</style>