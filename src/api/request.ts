import axios from 'axios'

const service = axios.create({
    baseURL: '/api'
})


// 请求拦截
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})

import { Dialog } from 'vant'

// 响应拦截器
service.interceptors.request.use((response: any) => {
    const { data: _data} = response
    const { data, code, msg } = _data
    if (code != 0) {
        Dialog.alert({
            message: msg
        }).then(() => {
            // 关闭窗口逻辑
        })
        return Promise.reject(msg)
    } 
    return data
}, error => {
    let { message } = error;
    if (message == 'Network Error') {
        message = '后端接口连接异常';
    }
    else if (message.includes('timeout')) {
        message = '系统接口请求超时';
    }
    else if (message.includes('Request failed with status code')) {
        message = '系统接口' + message.substr(message.length - 3) + '异常';
    }
    Promise.reject(error)
})

export default service;