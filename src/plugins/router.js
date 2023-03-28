import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '', name: 'home', component: () => import('@/views/Home.vue')},
    { path: '/quiz', name: 'quiz', component: () => import('@/views/Quiz.vue')},
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router