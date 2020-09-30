<template>
    <div id="header">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <img href="#" alt="logo" src='../assets/logo_teste.png' width="50" height="50">
            <b-navbar-brand href="#" style="margin-left:10px">{{nameBlog}}
            </b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: {
        nameBlog: String
    }
}
</script>

<style scoped>

</style>