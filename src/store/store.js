import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { router } from '../router/router'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: "",
        fbAPIKEy: "AIzaSyBAgidozZg1dpM7N8hk4723owG1-zPSz3c",
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== ""
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            state.token = ""
        }
    },
    actions: {

        initAuth({ dispatch, commit }) {
            let token = localStorage.getItem("token")
            if (token) {
                commit("setToken", token)
                router.push("/about")
            } else {
                router.push("/auth")
                return false
            }
        },

        login({ commit, dispatch, state }, authDate) {

            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";

            if (authDate.isUser) {
                authLink =
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
            }

            return axios
                .post(authLink + "AIzaSyBAgidozZg1dpM7N8hk4723owG1-zPSz3c", {
                    email: authDate.email,
                    password: authDate.password,
                    returnSecureToken: true,
                })
                .then((res) => {
                    commit("setToken", res.data.idToken)
                    console.log(res);
                    // localStorage.setItem("key","value")
                    localStorage.setItem("token", res.data.idToken)
                    
                    
                });
                
            },
            
            logaout({ commit, dispatch, state }) {
                commit("clearToken")
                localStorage.removeItem("token")
        },

    }
})

export default store;