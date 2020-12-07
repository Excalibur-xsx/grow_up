import axios from 'axios';

//引入一个进度条插件
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

import { Message } from 'element-ui';

const instance = axios.create({
    baseURL: "/api",
    headers: {},
});
//请求拦截器
instance.interceptors.request.use(
    (config) => {
        NProgress.start();
        return config;
    }
)
//响应拦截器
instance.interceptors.response.use(
    //响应成功
    (response) => {
        NProgress.done();
        if (response.data.code === 200) {
            //返回成功的数据
            return response.data.data;
        }
        const { message } = response.data;
        //提示错误
        Message.error(message);
        //返回失败的数据
        return Promise.reject(response.data.message);
    },
    //响应失败
    (error) => {
        NProgress.done();
        // console.log(error);
        const message = error.message || "网络错误";
        //提示错误
        Message.error(message);
        return Promise.reject(message);
    }
)

export default instance;