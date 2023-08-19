import axios from 'axios'

import { showLoadingToast, closeToast, showDialog } from 'vant'

let toast = null

const service = axios.create({
    baseURL: '/api',
    timeout: 5000, //超时时间
})

// 请求拦截
service.interceptors.request.use(config => {
    // 在请求头统一添加token
    // 或者请求之前显示lodding图标(这里只演示这个)
    toast = showLoadingToast({
        duration: 0,
        forbidClick: true,
        message: '加载中...',
    })

    return config
}, error => {
    closeToast(); //请求失败关闭loadding
    return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response: any) => {
    closeToast() //请求失败关闭loadding
    const { data: _data} = response
    const { data, code, message } = _data

    if (code != 0) {
        showDialog({
            title: message,
            message: message
        }).then(() => {
            // 关闭窗口逻辑
        })
        return Promise.reject(message)
    } 
    return data
}, error => {
    closeToast() //请求失败关闭loadding
    let { message } = error
    if (message == 'Network Error') {
        message = '后端接口连接异常'
    }
    else if (message.includes('timeout')) {
        message = '系统接口请求超时'
    }
    else if (message.includes('Request failed with status code')) {
        message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    return Promise.reject(error)
})


//封装请求的api
const callapi = (method = "GET", url : string, data = {}) => {
  return service({
    method,
    url,
    params: method === "GET" ? data : {},
    data: method === "POST" ? data : {},
  });
}

export const get = (url: string, data: any) => callapi("GET", url, data);
export const post = (url: string, data: any) => callapi("POST", url, data);