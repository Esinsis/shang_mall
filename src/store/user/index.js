import { getVerificationCode, registerUser, login, getUserInfo, logout } from '@/api';

const state = {
    code: '',
    token: localStorage.getItem("USER_TOKEN"),
    userInfo: {}
};
const actions = {
    // 获取短信验证码
    async getVerificationCode({ commit }, phone) {
        let result = await getVerificationCode(phone);
        if (result.code == 200) {
            commit('GET_VERIFICATION_CODE', result.data);
        }
    },
    async registerUser({ commit }, params) {
        let result = await registerUser(params);
        if (result.code == 200) {
            return 'OK';
        }
        return Promise.reject(new Error('register user failed'));
    },
    async login({ commit }, params) {
        let result = await login(params);
        if (result.code == 200) {
            commit('USER_LOGIN', result.data.token);
            localStorage.setItem("USER_TOKEN", result.data.token);
            commit('SET_USER_INFO', result.data.nickName);
            return 'OK';
        }
        return Promise.reject(new Error('login failed'));
    },
    async getUserInfo({ commit }) {
        let result = await getUserInfo();
        if (result.code == 200) {
            commit("SET_USER_INFO", result.data);
        }
    },
    async logout({ commit }) {
        let result = await logout();
        if (result.code == 200) {
            commit('LOGOUT');
            return 'OK';
        }
        return Promise.reject(new Error('logout failed'));
    }
};
const mutations = {
    GET_VERIFICATION_CODE(state, code) {
        state.code = code;
    },
    USER_LOGIN(state, token) {
        state.token = token;
    },
    SET_USER_INFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    LOGOUT(state) {
        state.token = '';
        // 清除本地存储的token
        state.userInfo = {};
        localStorage.removeItem("USER_TOKEN");
    }
};
const getters = {};

// 用户模块未开启命名空间
export default {
    state, actions, mutations, getters
}
