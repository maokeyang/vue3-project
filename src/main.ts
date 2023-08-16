import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vant/lib/index.css'

const app = createApp(App)

// 定义全局变量
app.config.globalProperties.$env = 'dev'

app.config.globalProperties.$filters = {
    fomart<T>(str:T) {
        return 'test_' + str;
    }
}

type Filter = {
    fomart<T>(str: T) : string
}

declare module 'vue' {
    export interface ComponentCustomProperties {
        $filters: Filter,
        $env: string
    }
}
 


app.use(createPinia())
app.use(router)

// 3 - 4
app.mount('#app')
