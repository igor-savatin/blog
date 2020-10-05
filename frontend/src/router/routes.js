import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import BlogPost from '../components/blogPost.vue'

Vue.use(Router)


const routes= [
        {path: '/',name: 'Home',component: Home},
        {path: '/post/:id', name: 'post', component: BlogPost}
    ]

export default routes;
