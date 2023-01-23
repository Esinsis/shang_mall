import { getGoodInfo, saveToCart } from "@/api"

const state = {
    goodInfo: {}
}
const actions = {
    async getGoodDetail({commit}, skuid){
        let result = await getGoodInfo(skuid);
        commit('GET_GOOD_INFO', result.data);
    },
    async save2Cart({commit}, {skuid, skuNum}){
        let result = await saveToCart(skuid, skuNum);
        if(result.code == 200) {
            return "OK";
        } else {
            return Promise.reject(new Error('save to shotcart failed'));
        }
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