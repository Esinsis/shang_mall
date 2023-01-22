import { getGoodInfo } from "@/api"

const state = {
    goodInfo: {}
}
const actions = {
    async getGoodDetail({commit}, skuid){
        let result = await getGoodInfo(skuid);
        commit('GET_GOOD_INFO', result.data);
    }
}
const mutations = {
    GET_GOOD_INFO(state, goodInfo){
        state.goodInfo = goodInfo;
    }
}
const getters = {
    goodInfo(state){
        return state.goodInfo || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
}

export default {
    namespaced: true,
    state, actions, mutations, getters
}