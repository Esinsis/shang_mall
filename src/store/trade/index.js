import { getAddressInfo, getOrderInfo } from "@/api"

const state = {
    addrs: [],
    orderInfo: {}
}
const actions = {
    // 获取用户地址信息
    async getAddressInfo({ commit }) {
        let result = await getAddressInfo();
        if (result.code == 200) {
            commit('GET_ADDR_INFO', result.data);
        }
    },
    // 获取订单详情
    async getOrderInfo({ commit }) {
        let result = await getOrderInfo();
        if (result.code == 200) {
            commit('GET_ORDER_INFO', result.data);
        }
    }
}
const mutations = {
    GET_ADDR_INFO(state, addrList) {
        state.addrs = addrList;
    },
    GET_ORDER_INFO(state, orderInfo){
        state.orderInfo = orderInfo;
    }
}
const getters = {}

export default {
    state, actions, mutations, getters
}