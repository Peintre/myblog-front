import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {
            name:'Home',
            path:'/',
            component:() => import('../pages/home.vue'),
            //相当于：
            //  import Home from '../pages/home.vue'
            //  component: Home
            children:[
                {
                    name:'首页',
                    path:'index',
                    component:() => import('../pages/index.vue'),  
                },
                {
                    name:'标签',
                    path:'tag',
                    component:() => import('../pages/tag.vue'),
                }]
        }
    ],
    history: createWebHashHistory(),

})
export default router