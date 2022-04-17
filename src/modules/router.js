import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {
            name:'Home',
            path:'/',
            redirect:'/index',
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
                },
                {
                    name:'留言板',
                    path:'communication',
                    component:() => import('../pages/communication.vue'),
                },
                {
                    name:'关于',
                    path:'about',
                    component:() => import('../pages/about.vue'),
                },
                
            ]
        }
    ],
     // 设置mode,有hash和history两种
    history: createWebHashHistory(),
   

})
export default router