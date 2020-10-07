import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        posts: [],
        isLogged: false
    },
    actions:{
        async loadPosts ({ commit }){
            await axios({url:'http://localhost:3000/api/v1/post',
                    method: 'get'})
                .then(response => response.data)
                .then(posts => {
                    commit('setPosts',posts)
                    console.log('load');
                })

        },
        loadOnePost ({ commit },id){
            axios({url:'http://localhost:3000/api/v1/post/'+id,
                    method:'get'})
                .then(response => response.data)
                .then(posts => {
                    commit('setPosts',posts)
                })
        },
        changeLogin({ commit }) {
            let newIsLogged = !this.state.isLogged 
            commit('changeLogin',{ newIsLogged } )
        },
        async updatePost(context, newPost){
            await axios({url: 'http://localhost:3000/api/v1/post/'+newPost.id,
                     method: 'put',
                     data: newPost
                     })
                    .then(response => {response.data})
                    .catch(res => {console.log(res)})
        },
        async insertPost( context, newPost){
            await axios({url: 'http://localhost:3000/api/v1/post/',
                method: 'post',
                data: newPost
                })
            .then(response => response.data)
            .catch(res => {console.log(res)})
        },
        async deletePost( context, id){
            await axios({url: 'http://localhost:3000/api/v1/post/'+id,
                method: 'delete'
                })
            .then(response => response.data)
            .catch(res => {console.log(res)})
            
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        changeLogin (state, { newIsLogged }) {
            state.isLogged = newIsLogged
        }
    },
    getters: {
        posts: state => {
            return state.posts
        }
    }
})

// https://flaviocopes.com/vuex/ 
// https://www.sitepoint.com/vuex-beginner-guide/