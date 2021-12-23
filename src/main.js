import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { firebaseApp } from './firebaseApp'
import store from './store'

import App from './components/App.vue'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/dashboard', component: Dashboard },
        { path: '/signin', component: Signin },
        { path: '/signup', component: Signup },
    ]
})


// console.log(firebaseApp.auth())
// Listening for auth state changes.
firebaseApp.auth.onAuthStateChanged(user => {
    if (user) {
        store.dispatch('signIn', user)
        router.push('/dashboard')
    } else {
        router.replace('./signin')
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
