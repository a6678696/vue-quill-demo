import {createRouter, createWebHistory} from 'vue-router'

let history = createWebHistory()
let routes = [
    {
        path: '/',
        name: 'myVueQuillEditor',
        component: () => import('@/view/myVueQuillEditor.vue')
    }
]

export default createRouter({history, routes})
