<template>
    <div id="header">
        <b-navbar class="dark" toggleable="lg" type="dark" variant="dark">
            <img href="#" alt="logo" class="d-inline-block align-top" src='../assets/logo_teste.png' width="182" height="101">
            <b-navbar-brand tag="h1" href="#" style="margin-left:10px">
                {{ nameBlog }}
            </b-navbar-brand>
            
            <b-navbar-brand right href="#" class="ml-auto">
                <b-button  size="sm" class="my-2 my-sm-0" type="submit" v-on:click="changeLogin">
                {{ !isLogged ? 'Login' : 'Logoff' }}    
                </b-button>
                
            </b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Header',
    props: {
        nameBlog: String
    },
    computed: mapState ({
        isLogged: state => state.isLogged 
    }),
    methods: {
        ...mapActions(['changeLogin'])
    }
}
</script>

<style scoped>

</style>