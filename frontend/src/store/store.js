import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        posts: [
            {
                id:1,
                title: "Titulo 1",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque!"
            },
            {
                id:2,
                title: "Titulo 2",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque!"
            },
            {
                id:3,
                title: "Titulo 3",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, explicabo consequuntur dolorum sed provident cum reiciendis quos necessitatibus ab omnis quaerat, quis laudantium aliquam deleniti maxime quibusdam consequatur impedit neque!"
            },
        ],
        isLogged: false
    }, 
    mutations: {
        changeLogin (state) {
            state.isLogged = !state.isLogged
        },
        updatePost (state,Post) {
            console.log(Post.text);
        }
    }
})

// https://flaviocopes.com/vuex/ 