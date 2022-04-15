// 引入vue组件
import {createApp} from "vue"     
// 引入App.vue
import  App  from "./App.vue"
//引入router
import router from "./modules/router"

// 接收App
const app = createApp(App)

//使用router
app.use(router)


// app挂载到index.html中去
app.mount('#app')