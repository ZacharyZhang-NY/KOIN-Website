import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store.js'
import Home from './components/Home/HomePage.vue'
import Login from './components/Login/LoginPage.vue'
import Register from './components/Register/RegisterPage.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).use(store).use(router).mount('#app')
