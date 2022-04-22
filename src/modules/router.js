import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {
            path:'/',
            redirect:'/home/index',
        },
        //博客前台展示部分
        {
            name:'前台页面布局',
            path:'/home',
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
                    name:'分类',
                    path:'category',
                    component:() => import('../pages/category.vue'),
                },
                {
                    name:'标签',
                    path:'tag',
                    component:() => import('../pages/tag.vue'),
                },
                {
                    name:'归档',
                    path:'archive',
                    component:() => import('../pages/archive.vue'),
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
        },
         //后台管理页面
         {
            name:'后台页面布局',
            path: '/admin',
            component:() => import('../pages/manage/home.vue'),
            children:[
                {
                    name:'登录',
                    path:'login',
                    component:() => import('../pages/manage/login.vue'),  
                },
            ]
        },

           
 
    ],
     // 设置mode,有hash和history两种
    history: createWebHashHistory(),
   

})
export default router