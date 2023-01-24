import axios from 'axios';
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
import { GET_UUID_TOKEN } from '@/utils/uuid_token';
import store from '@/store'

const request = axios.create({
    baseURL: '/api',
    timeout: 5000
})

request.interceptors.request.use((config) => {
    // 进度条开始
    nprogress.start();
    config.headers.userTempId = GET_UUID_TOKEN();

    // TOKEN
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }

    return config;
})

request.interceptors.response.use((res) => {
    // 进度条结束
    nprogress.done();
    return res.data;
}, (error) => {
    nprogress.done();
    return Promise.reject(new Error('fail'));
})

export default request;