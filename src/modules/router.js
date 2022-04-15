import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {
            name:'首页',
            component:() => import('../pages/home.vue')
            //相当于：
            //  import Home from '../pages/home.vue'
            //  component: Home
        }
    ],
    history: createWebHashHistory()

})
export default router