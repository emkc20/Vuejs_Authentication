import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

Vue.use(VueRouter);

import Auth from '../pages/auth/auth'
import About from '../pages/About'
import Homepage from '../pages/Homepage'


export const router = new VueRouter({

    routes: [
        {
            path: "/",
            component: Homepage,
            name: "HomePage",
            beforeEnter(to, from, next) {      //componente girmeden önce çalışır
                if (store.getters.isAuthenticated) {
                    next()
                } else {
                    next("/auth")
                }
            }
        },
        
        {
            path: "/about",
            component: About,
            name: "About",
            beforeEnter(to, from, next) {      //componente girmeden önce çalışır
                if (store.getters.isAuthenticated) {
                    next()
                } else {
                    next("/auth")
                }
            }
        },
        { path: "/auth", component: Auth, name: "Auth", },
    ],

    mode: "history"
})