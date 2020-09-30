<template>
    <div>
        <div v-for="item in $store.state.posts" :key="item.id">
            <h2>{{item.title}}</h1>
            <p>{{item.text}}</p>
        </div>
  </div>
</template>

<script>
export default {
    name: 'ListPosts'
}
</script>

<style>

</style>