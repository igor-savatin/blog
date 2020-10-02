import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        posts: [
            // {
            //     id:1,
            //     title: "Titulo 1",
            //     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque!"
            // },
            // {
            //     id:2,
            //     title: "Titulo 2",
            //     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque!"
            // },
            // {
            //     id:3,
            //     title: "Titulo 3",
            //     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque!"
            // },
        ],
        isLogged: false
    },
    actions:{
        loadPosts ({ commit }){
            axios.get('http://localhost:3000/api/v1/post')
                .then(response => response.data)
                .then(posts => {
                    commit('setPosts',posts)
                })
        },
        changeLogin({ commit }) {
            let newIsLogged = !this.state.isLogged 
            commit('changeLogin',{ newIsLogged } )
        },
        updatePost({ commit }, newPost){
            let index = this.state.posts.findIndex((postArr) => {
                return postArr.id == newPost.id
            })
            commit('updatePost', { newPost, index });
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        changeLogin (state, { newIsLogged }) {
            state.isLogged = newIsLogged
        },
        updatePost (state,{
            newPost,
            index
        }) {
            // state.posts[index] = newPost
            Vue.set(state.posts, index, newPost)
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